const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://ab-server19.herokuapp.com",
            changeOrigin: true,
        })
    );
};
