/** @type {import('postcss-load-config').Config} */
const config = {
    // eslint-disable-next-line global-require
    plugins: [require('autoprefixer'), require('postcss-nested')]
}

module.exports = config
