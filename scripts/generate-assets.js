const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Simple ICO generator for PNG-based ICO files
function createIco(images) {
  // images: array of { buffer: Buffer, width: number, height: number }
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  let currentOffset = 6 + count * 16;

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(currentOffset, 12); // offset
    dirEntries.push(entry);
    currentOffset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...images.map(img => img.buffer)]);
}

async function run() {
  console.log('--- Generating OpenGraph Images ---');
  const ogSource = path.join(__dirname, '../public/opengraph-image.png');

  // 1. Generate optimized 1200x630 OG images
  const ogCoverJpg = await sharp(ogSource)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  const ogCoverPng = await sharp(ogSource)
    .resize(1200, 630, { fit: 'cover' })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.jpg'), ogCoverJpg);
  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.png'), ogCoverPng);
  fs.writeFileSync(path.join(__dirname, '../app/opengraph-image.jpg'), ogCoverJpg);
  fs.writeFileSync(path.join(__dirname, '../app/opengraph-image.png'), ogCoverPng);
  fs.writeFileSync(path.join(__dirname, '../app/twitter-image.png'), ogCoverPng);

  console.log('✓ opengraph-image.jpg size:', ogCoverJpg.length, 'bytes');
  console.log('✓ opengraph-image.png size:', ogCoverPng.length, 'bytes');

  console.log('--- Generating Icons from Neon FMM Brand Emblem ---');
  const faviconSource = path.join(__dirname, '../scratch_favicon.png');

  // Center crop to 1648x1648 to isolate the glowing badge without edge artifacts
  const croppedBase = sharp(faviconSource).extract({ left: 200, top: 200, width: 1648, height: 1648 });

  // Android Chrome 512x512
  const android512 = await croppedBase.clone().resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/android-chrome-512x512.png'), android512);
  console.log('✓ android-chrome-512x512.png size:', android512.length, 'bytes');

  // Android Chrome 192x192
  const android192 = await croppedBase.clone().resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/android-chrome-192x192.png'), android192);
  console.log('✓ android-chrome-192x192.png size:', android192.length, 'bytes');

  // Apple touch icon (180x180)
  const apple180 = await croppedBase.clone().resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), apple180);
  fs.writeFileSync(path.join(__dirname, '../app/apple-icon.png'), apple180);
  console.log('✓ apple-touch-icon.png size:', apple180.length, 'bytes');

  // Standard 32x32 PNG icon
  const icon32 = await croppedBase.clone().resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), icon32);
  fs.writeFileSync(path.join(__dirname, '../app/icon.png'), icon32);
  console.log('✓ icon.png (32x32) size:', icon32.length, 'bytes');

  // Multi-resolution ICO (16x16, 32x32, 48x48)
  const ico16 = await croppedBase.clone().resize(16, 16).png().toBuffer();
  const ico32 = await croppedBase.clone().resize(32, 32).png().toBuffer();
  const ico48 = await croppedBase.clone().resize(48, 48).png().toBuffer();

  const multiIco = createIco([
    { buffer: ico16, width: 16, height: 16 },
    { buffer: ico32, width: 32, height: 32 },
    { buffer: ico48, width: 48, height: 48 },
  ]);

  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), multiIco);
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), multiIco);
  console.log('✓ favicon.ico size:', multiIco.length, 'bytes (previously 5,111,463 bytes!)');

  console.log('All assets generated successfully.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
