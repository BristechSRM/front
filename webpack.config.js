module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        modulesDirectories: ['node_modules', 'js']
    }
}
