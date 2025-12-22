import generateThemes from "@/hooks/generateThemes";

import { getFlag } from "type-flag";
import { build } from "tsup";
import { createVSIX } from "@vscode/vsce";
import { setOutput } from "@actions/core";
import { readPackageJsonVersion, updatePackageJson } from "@/hooks/packageJson";

// 解析命令行参数
const isDevelopment = getFlag("--dev", Boolean);
const shouldRegenerate = !getFlag("--no-regenerate", Boolean);

await generateThemes();

// 读取版本号
const packageJsonVersion = await readPackageJsonVersion();

// 重新生成package.json
if (shouldRegenerate) {
  console.debug(
    `Regenerating package.json with version "${packageJsonVersion}"`,
  );
  await updatePackageJson();
}

// 构建
await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: !isDevelopment,
  sourcemap: isDevelopment,
  target: "node16",
});

// 定义 VSIX 包的文件名（包含版本号）
const packagePath = `maccarone-vsc-${packageJsonVersion}.vsix`;

// 创建 VSIX 包（VS Code 扩展安装包）
await createVSIX({
  dependencies: false,
  packagePath,
});

// 如果在 GitHub Actions 环境中运行，设置输出变量
if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
