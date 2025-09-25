import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { flavorEntries } from "tavolozza";
import { repoRoot } from "./constants";
import { compileTheme, defaultOptions } from "@/theme";

const flavorNames = flavorEntries.map(([flavorName]) => flavorName);

const optEnvironmentVariable = process.env.MACCARONE_OPTIONS;

const optEnvironment = optEnvironmentVariable
  ? JSON.parse(optEnvironmentVariable)
  : {};

const main = async () => {
  await mkdir(join(repoRoot, "themes"), { recursive: true });

  flavorNames.map((name) => {
    const options = { ...defaultOptions, ...optEnvironment };
    const theme = compileTheme(name, options);

    writeFile(
      join(repoRoot, `themes/${name}.json`),
      JSON.stringify(theme, undefined, 2),
    );
  });
};

export default main;

if (typeof require !== "undefined" && require.main === module) {
  console.log("Compiling themes...");
  main();
}
