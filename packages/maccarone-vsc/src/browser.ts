import {
  ConfigurationChangeEvent,
  ExtensionContext,
  window,
  workspace,
} from "vscode";

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration("maccarone")) {
        window.showErrorMessage(
          `VSCode Web doesn't support advanced Catppuccin options at the moment.`,
        );
      }
    }),
  );
};
