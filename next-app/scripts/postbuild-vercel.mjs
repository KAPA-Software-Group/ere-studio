// Vercel's Next.js builder (newer than the pinned next@16.2.6) expects
// `.next/routes-manifest-deterministic.json` during its onBuildComplete step,
// but this Next version only emits the standard `routes-manifest.json`. Without
// the file the deployment errors with ENOENT after an otherwise successful
// build. This shim creates the expected file from the standard manifest (same
// JSON shape) so the builder's post-build step succeeds.
import { existsSync, copyFileSync } from "node:fs";

const src = ".next/routes-manifest.json";
const dest = ".next/routes-manifest-deterministic.json";

if (existsSync(dest)) {
  console.log("[postbuild] routes-manifest-deterministic.json already present");
} else if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log("[postbuild] created routes-manifest-deterministic.json for Vercel builder");
} else {
  console.warn("[postbuild] routes-manifest.json not found; nothing to shim");
}
