var FIREBASE_CONFIG = {
  apiKey: "AIzaSyA06PL7Yi4KB_OEeyf-bjXaRgE0DH8ImFg",
  authDomain: "mazhar-jewellers-c502a.firebaseapp.com",
  projectId: "mazhar-jewellers-c502a",
  storageBucket: "mazhar-jewellers-c502a.firebasestorage.app",
  messagingSenderId: "516909002122",
  appId: "1:516909002122:web:6cc9d844506486827aec73",
  measurementId: "G-L6JZR5G04M"
};

firebase.initializeApp(FIREBASE_CONFIG);
var db = firebase.firestore();
var fstorage = firebase.storage();

var FB_PRODUCTS_COL = 'products';
var FB_COLLECTIONS_COL = 'collections';
var FB_PRODUCT_PHOTOS_COL = 'product_photos';

function fbGetProducts() {
  return db.collection(FB_PRODUCTS_COL).orderBy('createdAt', 'desc').get().then(function(snap) {
    var list = [];
    snap.forEach(function(doc) {
      var d = doc.data();
      d.id = doc.id;
      list.push(d);
    });
    return list;
  });
}

function fbSaveProduct(product) {
  var p = JSON.parse(JSON.stringify(product));
  if (!p.createdAt) p.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  if (p.id) {
    var id = p.id;
    delete p.id;
    return db.collection(FB_PRODUCTS_COL).doc(id).set(p);
  }
  return db.collection(FB_PRODUCTS_COL).add(p);
}

function fbDeleteProduct(id) {
  return db.collection(FB_PRODUCTS_COL).doc(id).delete();
}

function fbGetCollections() {
  return db.collection(FB_COLLECTIONS_COL).orderBy('order', 'asc').get().then(function(snap) {
    var list = [];
    snap.forEach(function(doc) {
      var d = doc.data();
      d.id = doc.id;
      list.push(d);
    });
    return list;
  });
}

function fbSaveCollection(col) {
  var c = JSON.parse(JSON.stringify(col));
  if (c.id) {
    var id = c.id;
    delete c.id;
    return db.collection(FB_COLLECTIONS_COL).doc(id).set(c);
  }
  return db.collection(FB_COLLECTIONS_COL).add(c);
}

function fbDeleteCollection(id) {
  return db.collection(FB_COLLECTIONS_COL).doc(id).delete();
}

function fbCompressImage(file, maxW, maxH, quality) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = new Image();
      img.onload = function() {
        var w = img.width, h = img.height;
        if (w > maxW) { h *= maxW / w; w = maxW; }
        if (h > maxH) { w *= maxH / h; h = maxH; }
        var c = document.createElement('canvas');
        c.width = w; c.height = h;
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL('image/jpeg', quality));
      };
      img.onerror = function() { reject(new Error('Image load failed')); };
      img.src = e.target.result;
    };
    reader.onerror = function() { reject(new Error('File read failed')); };
    reader.readAsDataURL(file);
  });
}

function fbUploadImages(files, pathPrefix) {
  var promises = [];
  Array.prototype.forEach.call(files, function(file) {
    promises.push(fbCompressImage(file, 800, 800, 0.6));
  });
  return Promise.all(promises);
}

function fbMakeThumbnail(file) {
  return fbCompressImage(file, 200, 200, 0.4);
}

function fbGetProductPhotos(productId) {
  return db.collection(FB_PRODUCT_PHOTOS_COL).doc(productId).get().then(function(doc) {
    if (doc.exists) return doc.data().images || [];
    return [];
  });
}

function fbSaveProductPhotos(productId, urls) {
  return db.collection(FB_PRODUCT_PHOTOS_COL).doc(productId).set({
    productId: productId,
    images: urls,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function fbDeleteProductPhotos(productId) {
  return db.collection(FB_PRODUCT_PHOTOS_COL).doc(productId).delete().catch(function() {});
}

function fbUploadToStorage(dataUrl, folder) {
  var byteString = atob(dataUrl.split(',')[1]);
  var mimeType = dataUrl.split(',')[0].split(':')[1].split(';')[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  var ext = mimeType === 'image/png' ? '.png' : '.jpg';
  var blob = new Blob([ab], { type: mimeType });
  var fileName = folder + '/' + Date.now() + ext;
  var ref = fstorage.ref().child(fileName);
  return ref.put(blob, { contentType: mimeType }).then(function(snapshot) {
    return snapshot.ref.getDownloadURL();
  });
}

function fbUploadFileToStorage(file, folder) {
  return fbCompressImage(file, 800, 800, 0.6).then(function(dataUrl) {
    return fbUploadToStorage(dataUrl, folder).catch(function() {
      return dataUrl;
    });
  });
}

var FB_SETTINGS_COL = 'settings';

function fbSaveHero(imageUrl) {
  return db.collection(FB_SETTINGS_COL).doc('hero').set({
    imageUrl: imageUrl,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function fbGetHero() {
  return db.collection(FB_SETTINGS_COL).doc('hero').get().then(function(doc) {
    if (doc.exists) return doc.data().imageUrl || '';
    return '';
  }).catch(function() { return ''; });
}
