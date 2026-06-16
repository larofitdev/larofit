# LaroFit — push cache-buster (?v=2 on supabase-client.js) + SW v6
# 12 files changed. Download ALL of them into C:\Users\Lyndon\Desktop\larofit (overwrite) BEFORE running.

cd C:\Users\Lyndon\Desktop\larofit

git add builder.html exercise-create.html index.html login.html measurements.html `
        onboarding.html profile.html programs.html progress.html signup.html `
        workout.html sw.js
git commit -m "Cache-bust supabase-client.js (?v=2) across all pages; SW cache v6 - force fresh client so auto-sync runs"
git push

Write-Host ""
Write-Host "Pushed. After Cloudflare rebuilds (~1-2 min):" -ForegroundColor Green
Write-Host "On your PHONE: fully CLOSE the PWA (swipe it away), reopen it, go to Profile, scroll to the diagnostic." -ForegroundColor Cyan
Write-Host "Tap Refresh. Confirm it now reads: flushWorkoutSync present: TRUE" -ForegroundColor Cyan
Write-Host "If true, auto-sync is live and I will strip the diagnostic in a cleanup build." -ForegroundColor Cyan
