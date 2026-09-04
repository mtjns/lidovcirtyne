// One-off: produce web-sized versions of the huge group photo (9336x5715).
// Run: node scripts/gen-hero-images.js
const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "assets", "img", "spolecne-foto.webp");
const OUT = path.join(__dirname, "..", "assets", "img");

async function main() {
  // Wide landscape hero (full-bleed backgrounds, bands)
  await sharp(SRC)
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(OUT, "spolecne-hero.webp"));

  // Smaller wide (mobile / bands)
  await sharp(SRC)
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(path.join(OUT, "spolecne-hero-1400.webp"));

  console.log("done");
}
main().catch((e) => { console.error(e); process.exit(1); });
