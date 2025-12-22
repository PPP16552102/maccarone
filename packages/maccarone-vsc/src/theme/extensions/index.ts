import { ThemeContext } from "@/types";
import errorLens from "./error-lens";
import gitPullRequest from "./git-pull-request";
import gitLens from "./git-lens";

export default function extensions(context: ThemeContext) {
  return {
    ...errorLens(context),
    ...gitPullRequest(context),
    ...gitLens(context),
  };
}
