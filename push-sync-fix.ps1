# LaroFit — push Build #1 (automatic background workout sync)
# Files changed: supabase-client.js, sw.js
# Download both files into C:\Users\Lyndon\Desktop\larofit (overwrite) BEFORE running.

cd C:\Users\Lyndon\Desktop\larofit

git add supabase-client.js sw.js
git commit -m "Add automatic background workout sync (self-heal unsynced/offline workouts); SW cache v5"
git push

Write-Host ""
Write-Host "Pushed. Cloudflare Pages will rebuild in ~1-2 min." -ForegroundColor Green
Write-Host "Then: open the signed-in PWA on your phone while ONLINE to push the stranded workout up," -ForegroundColor Cyan
Write-Host "and reload the desktop - both workouts should now appear on both devices." -ForegroundColor Cyan
