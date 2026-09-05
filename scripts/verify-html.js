const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../.next/server/app/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const metaTags = html.match(/<meta[^>]+>/gi) || [];
const linkTags = html.match(/<link[^>]+>/gi) || [];

console.log('=== OpenGraph & Twitter Meta Tags ===');
metaTags.filter(t => t.includes('og:') || t.includes('twitter:')).forEach(t => console.log(t));

console.log('\n=== Icon & Manifest Links ===');
linkTags.filter(t => t.includes('icon') || t.includes('manifest')).forEach(t => console.log(t));

console.log('\n=== Public Asset Verification ===');
const publicDir = path.join(__dirname, '../public');
const checkFiles = [
  'favicon.ico',
  'icon.png',
  'icon.svg',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'opengraph-image.jpg',
  'opengraph-image.png',
  'site.webmanifest',
];

for (const file of checkFiles) {
  const fullPath = path.join(publicDir, file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`✓ ${file}: ${stats.size} bytes`);
  } else {
    console.error(`✗ MISSING: ${file}`);
  }
}
