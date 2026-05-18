param(
  [string]$SourceMessage = "Update website source",
  [string]$PublishMessage = "Publish static export",
  [string]$Branch = "main",
  [string]$Remote = "origin"
)

$ErrorActionPreference = "Stop"

function Run-Step {
  param([string]$Command)
  Write-Host ">> $Command" -ForegroundColor Cyan
  Invoke-Expression $Command
}

function Commit-IfChanged {
  param([string]$Message)
  $changes = git status --porcelain
  if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "No changes to commit for: $Message" -ForegroundColor Yellow
    return
  }
  Run-Step "git add ."
  Run-Step "git commit -m `"$Message`""
}

Write-Host "Starting website publish flow..." -ForegroundColor Green

# Ensure we run from script directory.
Set-Location $PSScriptRoot

# 1) Commit any source edits first (excluding local runtime logs).
Run-Step "git add -A"
git reset dev-server.log dev-server.err.log | Out-Null
Commit-IfChanged -Message $SourceMessage

# 2) Push source commit if any.
Run-Step "git push $Remote $Branch"

# 3) Build static export.
Run-Step "npm run build"

# 4) Copy static export (out/*) to repo root for GitHub Pages root deploy.
if (!(Test-Path ".\out")) {
  throw "Build completed but .\out folder was not found."
}
Copy-Item -Path ".\out\*" -Destination ".\" -Recurse -Force

# Ensure _next is served by GitHub Pages.
if (!(Test-Path ".nojekyll")) {
  New-Item -ItemType File -Path ".nojekyll" | Out-Null
}

# 5) Commit publish output and push.
Run-Step "git add -A"
git reset dev-server.log dev-server.err.log | Out-Null
Commit-IfChanged -Message $PublishMessage
Run-Step "git push $Remote $Branch"

Write-Host "Publish complete. Branch: $Branch, Remote: $Remote" -ForegroundColor Green
