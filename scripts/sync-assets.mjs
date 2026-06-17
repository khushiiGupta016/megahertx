import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "assets", "images");

const unsplash = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const ASSET_MANIFEST = {
  "film-set.jpg": unsplash("1485846234645-a62644f84728"),
  "cinema-camera.jpg": unsplash("1516035069371-29a1b244cc32"),
  "director.jpg": unsplash("1478144591773-5817ee4b263"),
  "red-carpet.jpg": unsplash("1511578314322-379afb476865"),
  "voice-studio.jpg": unsplash("1590602847861-f357a9332bbc"),
  "concert-stage.jpg": unsplash("1501386761578-eac5c94b800a"),
  "film-reel.jpg": unsplash("1489599849927-2ee91cede3ba"),
  "production.jpg": unsplash("1492691527719-9d1e07e534b4"),
  "spotlight.jpg": unsplash("1514525253161-7a46d19cd819"),
  "premiere.jpg": unsplash("1440404653325-ab127d49abc1"),
  "corporate-office.jpg": unsplash("1497366216548-37526070297c"),
  "lifestyle.jpg": unsplash("1517841905240-472988babdf9"),
  "promo-ad.jpg": unsplash("1574717024652-61c2ff874311"),
  "microphone.jpg": unsplash("1598483459271-8568f4c4b5bc"),
  "narration.jpg": unsplash("1478737270239-2f02b77fc618"),
  "studio-mic.jpg": unsplash("1516280440614-37939bbacd81"),
  "podcast-banner.jpg": unsplash("1478737270239-2f02b77fc618", 1600),
  "podcast-recording.jpg": unsplash("1590602847861-f357a9332bbc"),
  "podcast-editing.jpg": unsplash("1516280440614-37939bbacd81"),
  "podcast-publishing.jpg": unsplash("1505740420928-5e560c06d30e"),
  "podcast-distribution.jpg": unsplash("1516321318423-f06f85e504b3"),
  "event-anchoring.jpg": unsplash("1514525253161-7a46d19cd819"),
  "event-team-building.jpg": unsplash("1511795299204-93292bfe52d0"),
  "event-corporate.jpg": unsplash("1540575467063-178a50c2df87"),
  "event-roadshow.jpg": unsplash("1501281668745-f7f57925c3b4"),
};

mkdirSync(outDir, { recursive: true });

async function downloadAsset(filename, url) {
  const dest = join(outDir, filename);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(dest, buffer);
  console.log(`Saved ${filename}`);
}

const FALLBACK_MAP = {
  "director.jpg": "cinema-camera.jpg",
  "promo-ad.jpg": "film-reel.jpg",
  "microphone.jpg": "studio-mic.jpg",
  "event-team-building.jpg": "event-corporate.jpg",
};

function copyFallback(filename) {
  const fallbackName = FALLBACK_MAP[filename] ?? "film-set.jpg";
  const fallback = join(outDir, fallbackName);
  const dest = join(outDir, filename);
  if (existsSync(fallback)) {
    copyFileSync(fallback, dest);
    console.log(`Fallback copy for ${filename} from ${fallbackName}`);
    return;
  }
  const filmSet = join(outDir, "film-set.jpg");
  if (existsSync(filmSet)) {
    copyFileSync(filmSet, dest);
    console.log(`Fallback copy for ${filename} from film-set.jpg`);
    return;
  }
  throw new Error(`No fallback available for ${filename}`);
}

async function main() {
  const entries = Object.entries(ASSET_MANIFEST);
  for (const [filename, url] of entries) {
    try {
      await downloadAsset(filename, url);
    } catch (error) {
      console.warn(`Warning: ${filename} failed (${error.message})`);
      copyFallback(filename);
    }
  }

  copyFileSync(join(outDir, "film-set.jpg"), join(outDir, "media-collage-texture.jpg"));
  console.log("Saved media-collage-texture.jpg");
  console.log(`Done — ${entries.length + 1} assets in public/assets/images/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
