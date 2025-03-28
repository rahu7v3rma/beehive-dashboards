const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/backend',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
            pathRewrite: { '^/backend': '' }
        })
    );
    app.use(
        '/pollinator/task-description-generator',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5053',
            changeOrigin: true,
            pathRewrite: {
                '^/pollinator/task-description-generator': ''
            }
        })
    );
    app.use(
        '/pollinator/task-description-feedback',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5054',
            changeOrigin: true,
            pathRewrite: {
                '^/pollinator/task-description-feedback': ''
            }
        })
    );
    app.use(
        '/pollinator/task-context',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5055',
            changeOrigin: true,
            pathRewrite: {
                '^/pollinator/task-context': ''
            }
        })
    );
    app.use(
        '/pollinator/task-time-estimation',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5057',
            changeOrigin: true,
            pathRewrite: {
                '^/pollinator/task-time-estimation': ''
            }
        })
    );
    app.use(
        '/praesepe',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5002',
            changeOrigin: true,
            pathRewrite: { '^/praesepe': '' }
        })
    );
};
