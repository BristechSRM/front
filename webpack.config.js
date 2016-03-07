module.exports = {
    entry: './app/app.module.js',
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        modulesDirectories: ['node_modules', 'js']
    }
}
