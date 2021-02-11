module.exports = {
    productionSourceMap: false,
    publicPath: process.env.BASE_URL,
    pages: {
        index: {
            entry: "src/main.js",
            title: process.env.VUE_APP_NAME,
        }
    }
}
