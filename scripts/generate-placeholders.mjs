import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Jimp } from "jimp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

await mkdir(publicDir, { recursive: true });

const hero = new Jimp({ width: 800, height: 1216, color: 0x141c30ff });
await hero.write(join(publicDir, "hero-portrait.jpg"));

const og = new Jimp({ width: 1200, height: 630, color: 0x1e2846ff });
await og.write(join(publicDir, "og-image.jpg"));

const icon = new Jimp({ width: 180, height: 180, color: 0x080c16ff });
await icon.write(join(publicDir, "apple-touch-icon.png"));

console.log("Generated placeholder images");
