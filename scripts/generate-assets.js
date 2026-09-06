const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Simple ICO generator for PNG-based ICO files
function createIco(images) {
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
  console.log('--- Generating Icons from public/icon.svg (Red F, No Background) ---');
  const svgSource = path.join(__dirname, '../public/icon.svg');

  if (!fs.existsSync(svgSource)) {
    throw new Error('public/icon.svg not found!');
  }

  // 1. Android Chrome 512x512
  const android512 = await sharp(svgSource).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/android-chrome-512x512.png'), android512);
  console.log('✓ public/android-chrome-512x512.png created:', android512.length, 'bytes');

  // 2. Android Chrome 192x192
  const android192 = await sharp(svgSource).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/android-chrome-192x192.png'), android192);
  console.log('✓ public/android-chrome-192x192.png created:', android192.length, 'bytes');

  // 3. Apple Touch Icon 180x180
  const apple180 = await sharp(svgSource).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), apple180);
  console.log('✓ public/apple-touch-icon.png created:', apple180.length, 'bytes');

  // 4. Standard 32x32 PNG icon
  const icon32 = await sharp(svgSource).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), icon32);
  console.log('✓ public/icon.png (32x32) created:', icon32.length, 'bytes');

  // 5. Multi-resolution ICO (16x16, 32x32, 48x48) with transparent bg
  const ico16 = await sharp(svgSource).resize(16, 16).png().toBuffer();
  const ico48 = await sharp(svgSource).resize(48, 48).png().toBuffer();

  const multiIco = createIco([
    { buffer: ico16, width: 16, height: 16 },
    { buffer: icon32, width: 32, height: 32 },
    { buffer: ico48, width: 48, height: 48 },
  ]);

  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), multiIco);
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), multiIco);
  console.log('✓ public/favicon.ico and app/favicon.ico created:', multiIco.length, 'bytes');

  console.log('All icons generated successfully from red F SVG with transparent background.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
