import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root =
  typeof __dirname === "undefined"
    ? dirname(fileURLToPath(import.meta.url))
    : __dirname;

export const repoRoot = join(root, "../..");
