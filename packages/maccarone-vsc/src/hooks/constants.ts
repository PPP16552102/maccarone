import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root =
  typeof __dirname === "undefined"
    ? dirname(fileURLToPath(import.meta.url))
    : __dirname;

export const repoRoot = join(root, "../..");

export const VSCodeSchemasRoot =
  "https://raw.githubusercontent.com/ota-meshi/extract-vscode-schemas/bd18db29edb183a0d8b0b8250b22dbd4428a0da8/resources/vscode/schemas/";

export const Accents = ["red", "green", "yellow", "blue"];
