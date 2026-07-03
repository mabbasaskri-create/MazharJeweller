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

function fbUploadImage(file, path) {
  var ref = fstorage.ref(path);
  return ref.put(file).then(function(snap) {
    return snap.ref.getDownloadURL();
  });
}

function fbDeleteImage(url) {
  if (!url || !url.includes('firebasestorage')) return Promise.resolve();
  try {
    var ref = fstorage.refFromURL(url);
    return ref.delete();
  } catch(e) {
    return Promise.resolve();
  }
}

function fbUploadImages(files, pathPrefix) {
  var promises = [];
  Array.prototype.forEach.call(files, function(file, i) {
    var safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    var path = pathPrefix + '/' + Date.now() + '-' + i + '-' + safeName;
    var ref = fstorage.ref(path);
    promises.push(ref.put(file).then(function(snap) {
      return snap.ref.getDownloadURL();
    }));
  });
  return Promise.all(promises);
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
