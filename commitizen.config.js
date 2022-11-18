/* eslint-disable @typescript-eslint/no-var-requires */
const custom = require("@digitalroute/cz-conventional-changelog-for-jira/configurable");

module.exports = custom({
  jiraPrefix: "CI",
  jiraLocation: "post-description",
  jiraPrepend: "[",
  jiraAppend: "]",
});
