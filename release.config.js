module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/olehlavryk/react-app-cicd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
