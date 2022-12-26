const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/endpoint',
                        { 
                            target: 'https://wild-puce-dove-hose.cyclic.app', 
                            changeOrigin: true 
                        })
    )      
};
