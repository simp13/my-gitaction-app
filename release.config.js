module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/simp13/my-gitaction-app",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator',  
        '@semantic-release/github'
    ]
};