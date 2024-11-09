const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/endpoint',
                        { 
                            target: 'https://merndatabase-production.up.railway.app/', 
                            changeOrigin: true 
                        })
    )      
};
