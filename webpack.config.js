module.exports = {
    entry: './dist/mod.js',
    experiments: {
        outputModule: true
    },
    mode: 'production',
    module: {
        parser: {
            javascript: {
                importMeta: false
            }
        }
    },
    output: {
        filename: 'mod.js',
        library: {
            type: 'module'
        },
        module: true,
        path: __dirname
    }
}