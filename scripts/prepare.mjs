import { cpSync, existsSync, mkdirSync } from "node:fs";

mkdirSync("public", { recursive: true });
for (const path of [
  "assets", "images", "docs/screenshots", "uploads", ".well-known",
  "favicon.svg", "favicon.ico", "favicon.png", "favicon-32x32.png",
  "apple-touch-icon.png", "logo_no_bg.png", "icons.svg", "robots.txt", "sitemap.xml",
]) {
  if (existsSync(path)) {
    cpSync(path, `public/${path}`, {
      recursive: true,
      filter: (file) => !/\.bak|\.php$|\.html$/.test(file),
    });
  }
}
