import * as core from "@actions/core";

async function run() {
  try {
    const version = core.getInput("version");
    const emacsCIVersion = "emacs-" + version.replace(".", "-");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
