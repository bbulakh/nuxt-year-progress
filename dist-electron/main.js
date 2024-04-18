import "electron";
import e from "path";
process.env.ROOT = e.join(__dirname, "..");
process.env.DIST = e.join(process.env.ROOT, "dist-electron");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL ? e.join(process.env.ROOT, "public") : e.join(process.env.ROOT, ".output/public");
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
e.join(process.env.DIST, "preload.js");
