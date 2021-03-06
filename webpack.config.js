var paths = {
    src : './src',
    dist: './dist'
};

module.exports = {
    entry: {
        lrz: paths.src + '/lrz'
    },

    output: {
        publicPath   : paths.dist + '/',
        filename     : "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    resolve: {
        root: [
            paths.src + '/',
            paths.src + '/lib'
        ]
    }
};