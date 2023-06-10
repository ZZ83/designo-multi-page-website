module.exports = {
    plugins: [
        require('autoprefixer')({overrideBrowserslist: ['last 4 versions']}),
        require('postcss-combine-media-query'),
    ],
};