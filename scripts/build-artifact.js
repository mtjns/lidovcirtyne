// Build a self-contained copy of hero-varianty.html with the photo inlined
// as a data: URI, so it can be published as an Artifact (which can't read
// local files). Output goes to the scratchpad.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = process.argv[2];

const webp = fs.readFileSync(path.join(ROOT, "assets", "img", "spolecne-hero.webp"));
const dataUri = "data:image/webp;base64," + webp.toString("base64");

let html = fs.readFileSync(path.join(ROOT, "hero-varianty.html"), "utf8");
html = html.split("assets/img/spolecne-hero.webp").join(dataUri);

fs.writeFileSync(OUT, html);
console.log("wrote", OUT, "(" + Math.round(html.length / 1024) + " KB)");
