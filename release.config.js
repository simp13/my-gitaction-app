module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/simp13/my-gitaction-app",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator',  
        '@semantic-release/github'
    ]
};