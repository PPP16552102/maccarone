"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(main_exports);
var import_vscode2 = require("vscode");

// src/utilities.ts
var import_vscode = require("vscode");

// ../../node_modules/.pnpm/tavolozza@0.1.0/node_modules/tavolozza/esm/palette.js
var palette_default = {
  "version": "0.1.0",
  "lampone": {
    "name": "Lampone",
    "emoji": "\u{1F353}",
    "order": 0,
    "dark": false,
    "colors": {
      "red": {
        "name": "Red",
        "order": 0,
        "hex": "#f00",
        "rgb": {
          "r": 255,
          "g": 0,
          "b": 0
        },
        "hsl": {
          "h": 0,
          "s": 1,
          "l": 0.5
        },
        "accent": true
      },
      "green": {
        "name": "Green",
        "order": 1,
        "hex": "#0f0",
        "rgb": {
          "r": 0,
          "g": 255,
          "b": 0
        },
        "hsl": {
          "h": 120,
          "s": 1,
          "l": 0.5
        },
        "accent": true
      },
      "yellow": {
        "name": "Yellow",
        "order": 2,
        "hex": "#ff0",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 0
        },
        "hsl": {
          "h": 60,
          "s": 1,
          "l": 0.5
        },
        "accent": true
      },
      "blue": {
        "name": "Blue",
        "order": 3,
        "hex": "#00f",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 255
        },
        "hsl": {
          "h": 240,
          "s": 1,
          "l": 0.5
        },
        "accent": true
      },
      "text": {
        "name": "Text",
        "order": 4,
        "hex": "#4c4f69",
        "rgb": {
          "r": 76,
          "g": 79,
          "b": 105
        },
        "hsl": {
          "h": 233.79310344827587,
          "s": 0.16022099447513813,
          "l": 0.3549019607843137
        },
        "accent": false
      }
    },
    "ansiColors": {
      "black": {
        "name": "Black",
        "order": 0,
        "normal": {
          "name": "Black",
          "hex": "#f00",
          "rgb": {
            "r": 255,
            "g": 0,
            "b": 0
          },
          "hsl": {
            "h": 0,
            "s": 1,
            "l": 0.5
          },
          "code": 0
        },
        "bright": {
          "name": "Bright Black",
          "hex": "#f00",
          "rgb": {
            "r": 255,
            "g": 0,
            "b": 0
          },
          "hsl": {
            "h": 0,
            "s": 1,
            "l": 0.5
          },
          "code": 8
        }
      },
      "red": {
        "name": "Red",
        "order": 1,
        "normal": {
          "name": "Red",
          "hex": "#f00",
          "rgb": {
            "r": 255,
            "g": 0,
            "b": 0
          },
          "hsl": {
            "h": 0,
            "s": 1,
            "l": 0.5
          },
          "code": 1
        },
        "bright": {
          "name": "Bright Red",
          "hex": "#ff3915",
          "rgb": {
            "r": 255,
            "g": 57,
            "b": 20
          },
          "hsl": {
            "h": 9.230769230769232,
            "s": 1,
            "l": 0.5411764705882353
          },
          "code": 9
        }
      },
      "green": {
        "name": "Green",
        "order": 2,
        "normal": {
          "name": "Green",
          "hex": "#0f0",
          "rgb": {
            "r": 0,
            "g": 255,
            "b": 0
          },
          "hsl": {
            "h": 120,
            "s": 1,
            "l": 0.5
          },
          "code": 2
        },
        "bright": {
          "name": "Bright Green",
          "hex": "#9fff9b",
          "rgb": {
            "r": 158,
            "g": 255,
            "b": 155
          },
          "hsl": {
            "h": 117.6,
            "s": 1,
            "l": 0.803921568627451
          },
          "code": 10
        }
      },
      "yellow": {
        "name": "Yellow",
        "order": 3,
        "normal": {
          "name": "Yellow",
          "hex": "#ff0",
          "rgb": {
            "r": 255,
            "g": 255,
            "b": 0
          },
          "hsl": {
            "h": 60,
            "s": 1,
            "l": 0.5
          },
          "code": 3
        },
        "bright": {
          "name": "Bright Yellow",
          "hex": "#fff",
          "rgb": {
            "r": 255,
            "g": 254,
            "b": 254
          },
          "hsl": {
            "h": 0,
            "s": 0,
            "l": 1
          },
          "code": 11
        }
      },
      "blue": {
        "name": "Blue",
        "order": 4,
        "normal": {
          "name": "Blue",
          "hex": "#00f",
          "rgb": {
            "r": 0,
            "g": 0,
            "b": 255
          },
          "hsl": {
            "h": 240,
            "s": 1,
            "l": 0.5
          },
          "code": 4
        },
        "bright": {
          "name": "Bright Blue",
          "hex": "#4100ff",
          "rgb": {
            "r": 64,
            "g": 0,
            "b": 255
          },
          "hsl": {
            "h": 255.29411764705884,
            "s": 1,
            "l": 0.5
          },
          "code": 12
        }
      }
    }
  }
};

// ../../node_modules/.pnpm/tavolozza@0.1.0/node_modules/tavolozza/esm/utils/shared.js
var entriesFromObject = (obj) => Object.entries(obj);

// ../../node_modules/.pnpm/tavolozza@0.1.0/node_modules/tavolozza/esm/mod.js
var { version: _, ...jsonFlavor } = palette_default;
var version = palette_default.version;
var flavors = entriesFromObject(jsonFlavor).reduce((acc, [flavorName, flavor]) => {
  acc[flavorName] = {
    ...flavor,
    colorEntries: entriesFromObject(flavor.colors),
    ansiColorEntries: entriesFromObject(flavor.ansiColors)
  };
  return acc;
}, {});
var flavorEntries = entriesFromObject(flavors);

// src/theme/index.ts
var defaultOptions = {
  accent: "mauve",
  boldKeywords: true,
  italicComments: true,
  italicKeywords: true,
  colorOverrides: {},
  workbenchMode: "default",
  bracketMode: "rainbow",
  extraBordersEnabled: false,
  customUIColors: {},
  syncWithIconPack: true
};
var compileTheme = (flavor = "lampone", options = defaultOptions) => {
  var _a, _b;
  const flavorData = flavors[flavor];
  const ctpPalette = {};
  const paletteAnsi = {
    normal: {},
    bright: {}
  };
  for (const [k, v] of flavorData.colorEntries) {
    ctpPalette[k] = v.hex;
  }
  for (const [k, v] of flavorData.ansiColorEntries) {
    paletteAnsi.normal[k] = v.normal.hex;
    paletteAnsi.bright[k] = v.bright.hex;
  }
  const palette = {
    ...ctpPalette,
    ...(_a = options.colorOverrides) == null ? void 0 : _a.all,
    ...(_b = options.colorOverrides) == null ? void 0 : _b[flavor]
  };
  const context = {
    flavor,
    palette,
    paletteAnsi,
    options
  };
  return {
    name: `Maccarone ${flavorData.name}`,
    type: "light"
  };
  console.log("palett", palette);
};

// src/utilities.ts
var filterObject = (object, function_) => {
  return Object.fromEntries(
    Object.entries(object).filter((element, index, array) => {
      function_(element, index, array);
    })
  );
};
var writeThemeFile = async (uri, data) => {
  return import_vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(data, void 0, 2))).then(
    () => {
    },
    (error) => {
      import_vscode.window.showErrorMessage(error.message);
    }
  );
};
var fileExits = async (uri) => {
  return import_vscode.workspace.fs.stat(uri).then(
    () => true,
    () => false
  );
};
var LOG = import_vscode.window.createOutputChannel("Maccarone Theme", { log: true });
var promptToReload = (trigger) => {
  const message = `Maccarone: ${trigger} - Reload Required.`;
  const action = "Reload Window";
  import_vscode.window.showInformationMessage(message, action).then((selectedAction) => {
    if (selectedAction === action)
      import_vscode.commands.executeCommand("workbench.action.reloadWindow");
  });
};
var isFreshInstall = async (context) => {
  LOG.info("Checking if maccarone is installed for the first time.");
  const flagUri = import_vscode.Uri.file(context.asAbsolutePath("themes/.flag"));
  if (await fileExits(flagUri)) {
    LOG.info("Maccarone has been installed before.");
    return false;
  } else {
    LOG.info("Maccarone is installed for the first time!");
    return import_vscode.workspace.fs.writeFile(flagUri, Buffer.from("")).then(
      () => true,
      () => "error"
    );
  }
};
var isDefaultConfig = () => {
  LOG.info("Checking if maccarone is using default config.");
  const state = JSON.stringify(getConfiguration()) === JSON.stringify(defaultOptions);
  LOG.info(`Maccarone is using ${state ? "default" : "custom"} config.`);
  return state;
};
var getConfiguration = () => {
  const config = import_vscode.workspace.getConfiguration("maccarone");
  const options = {
    accent: config.get("accentColor"),
    boldKeywords: config.get("boldKeywords"),
    italicKeywords: config.get("italicKeywords"),
    italicComments: config.get("italicComments"),
    colorOverrides: config.get("colorOverrides"),
    workbenchMode: config.get("workbenchMode"),
    bracketMode: config.get("bracketMode"),
    extraBordersEnabled: config.get("extraBordersEnabled"),
    customUIColors: config.get("customUIColors"),
    syncWithIconPack: config.get("syncWithIconPack")
  };
  return {
    ...defaultOptions,
    ...filterObject(options, ([, value]) => value !== void 0)
  };
};
var updateThemes = (options, paths, trigger) => {
  const flavors2 = flavorEntries.map(([flavorName]) => flavorName);
  const promises = flavors2.map(async (flavor) => {
    const theme = compileTheme(flavor, options);
    return writeThemeFile(paths[flavor], theme);
  });
  Promise.all(promises).then(() => {
    promptToReload(trigger);
  }).catch((error) => {
    import_vscode.window.showErrorMessage(
      "Failed to save re-compiled theme: \n" + error.message
    );
  });
};
var getActiveTheme = () => {
  const workbench = import_vscode.workspace.getConfiguration("workbench");
  const autoDetectColorSchema = import_vscode.workspace.getConfiguration("window").get("autoDetectColorSchema");
  if (autoDetectColorSchema) {
    const prefs = {
      [import_vscode.ColorThemeKind.Light]: "preferredLightColorTheme",
      [import_vscode.ColorThemeKind.Dark]: "preferredDarkColorTheme",
      [import_vscode.ColorThemeKind.HighContrastLight]: "preferredHighContrastLightColorTheme",
      [import_vscode.ColorThemeKind.HighContrast]: "preferredHighContrastColorTheme"
    };
    return workbench.get(prefs[import_vscode.window.activeColorTheme.kind]) ?? "";
  } else {
    return workbench.get("colorTheme") ?? "";
  }
};
var syncToIconPack = () => {
  const id = 'maccarone.maccarone-vsc-icons"';
  const uiThemesToIconThemes = {
    "Maccarone Lampone": "maccarone-lampone"
  };
  const uiTheme = getActiveTheme();
  const ctpThemeActive = Object.keys(uiThemesToIconThemes).includes(uiTheme);
  const ctpIconsActive = Object.values(uiThemesToIconThemes).includes(
    import_vscode.workspace.getConfiguration("workbench").get("iconTheme") ?? ""
  );
  if (ctpThemeActive && ctpIconsActive) {
    const iconTheme = uiThemesToIconThemes[uiTheme];
    import_vscode.workspace.getConfiguration("workbench").update("iconTheme", iconTheme, import_vscode.ConfigurationTarget.Global);
  }
};

// src/main.ts
var activate = async (context) => {
  const base = context.extensionUri;
  import_vscode2.window.showInformationMessage("hello");
  const paths = {
    lampone: import_vscode2.Uri.joinPath(base, "themes", "lampone.json")
  };
  const config = getConfiguration();
  if (await isFreshInstall(context) && !isDefaultConfig()) {
    updateThemes(config, paths, "Update detected" /* FRESH_INSTALL */);
  }
  context.subscriptions.push(
    import_vscode2.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("maccarone")) {
        updateThemes(getConfiguration(), paths, "Configuration changed" /* CONFIG_CHANGE */);
      }
      if (event.affectsConfiguration("workbench.colorTheme") && config.syncWithIconPack) {
        syncToIconPack();
      }
    }),
    import_vscode2.window.onDidChangeActiveColorTheme(() => {
      if (config.syncWithIconPack) {
        syncToIconPack();
      }
    })
  );
  if (config.syncWithIconPack) syncToIconPack();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
//# sourceMappingURL=main.cjs.map