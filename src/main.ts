import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function run() {
  try {
    const version = core.getInput("version");
    core.exportVariable("NXF_VER", version);
    await exec.exec("curl -s https://get.nextflow.io | bash ");
    await exec.exec("sudo mv nextflow /usr/local/bin/");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
