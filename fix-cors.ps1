Write-Host "Fixing CORS for Firebase Storage..." -ForegroundColor Cyan

$bucket = "mazhar-jewellers-c502a.firebasestorage.app"
$altBucket = "mazhar-jewellers-c502a.appspot.com"

$corsConfig = @{
  cors = @(
    @{
      origin = @("https://mazhar-jeweller.vercel.app")
      method = @("GET", "POST", "PUT", "DELETE", "HEAD")
      responseHeader = @("*")
      maxAgeSeconds = 3600
    }
  )
} | ConvertTo-Json -Compress

# Try gsutil first
try {
  $gsutil = Get-Command gsutil -ErrorAction Stop
  Write-Host "gsutil found. Setting CORS..." -ForegroundColor Yellow
  & gsutil cors set cors.json gs://$bucket 2>&1
  if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: CORS set on $bucket" -ForegroundColor Green
    exit 0
  }
  Write-Host "Trying alternate bucket..." -ForegroundColor Yellow
  & gsutil cors set cors.json gs://$altBucket 2>&1
  if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS: CORS set on $altBucket" -ForegroundColor Green
    exit 0
  }
} catch {
  Write-Host "gsutil not available." -ForegroundColor Red
}

# Try gcloud
try {
  $gcloud = Get-Command gcloud -ErrorAction Stop
  Write-Host "Getting access token..." -ForegroundColor Yellow
  $token = & gcloud auth print-access-token 2>&1
  if ($LASTEXITCODE -eq 0) {
    $body = '{"cors":[{"origin":["https://mazhar-jeweller.vercel.app"],"responseHeader":["*"],"method":["GET","POST","PUT","DELETE","HEAD"],"maxAgeSeconds":3600}]}'
    
    Write-Host "Setting CORS on $bucket..." -ForegroundColor Yellow
    try {
      $result = Invoke-RestMethod -Method PATCH -Uri "https://storage.googleapis.com/storage/v1/b/$bucket" -Headers @{Authorization = "Bearer $token"; "Content-Type" = "application/json"} -Body $body
      Write-Host "SUCCESS: CORS set on $bucket" -ForegroundColor Green
      exit 0
    } catch {
      Write-Host "Trying alternate bucket..." -ForegroundColor Yellow
      try {
        $result = Invoke-RestMethod -Method PATCH -Uri "https://storage.googleapis.com/storage/v1/b/$altBucket" -Headers @{Authorization = "Bearer $token"; "Content-Type" = "application/json"} -Body $body
        Write-Host "SUCCESS: CORS set on $altBucket" -ForegroundColor Green
        exit 0
      } catch {
        Write-Host "Alternate bucket also failed." -ForegroundColor Red
      }
    }
  }
} catch {
  Write-Host "gcloud not available either." -ForegroundColor Red
}

Write-Host "`nCould not fix CORS automatically. Please do one of these:" -ForegroundColor Yellow
Write-Host "1. Open fix-cors.html in your browser" -ForegroundColor White
Write-Host "2. Open Google Cloud Shell (shell.cloud.google.com) and run:" -ForegroundColor White
Write-Host "   gsutil cors set cors.json gs://mazhar-jewellers-c502a.firebasestorage.app" -ForegroundColor Green
Write-Host "3. Or run: gcloud storage buckets update gs://mazhar-jewellers-c502a.firebasestorage.app --cors-file=cors.json" -ForegroundColor Green
