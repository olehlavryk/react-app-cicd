const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw (new Error("Some error message"))

  core.debug("debug message");
  core.warning("warning message");
  core.error("error message");

  const name = core.getInput("who-to-greed");
  core.setSecret(name);
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());
  core.startGroup("Logging github object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup()

  core.exportVariable("HELLO", "hello")
} catch (error) {
  core.setFailed(error.message);
}
