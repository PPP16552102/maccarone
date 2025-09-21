import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { flavorEntries } from "tavolozza";
import { repoRoot } from "./constants";

const flavorNames = flavorEntries.map(([flavorName]) => flavorName);

const optEnvironmentVariable = process.env.MACCARONE_OPTIONS;

const optEnvironment = optEnvironmentVariable
  ? JSON.parse(optEnvironmentVariable)
  : {};

const main = async () => {
  await mkdir(join(repoRoot, "themes"), { recursive: true });

  flavorNames.map((name) => {
    const options = {}
  })
};

export default main;
