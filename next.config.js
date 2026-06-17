const withImages = require("next-images");
module.exports = withImages({
    distDir: "build",
    env: {
        BASE_URL: "http://localhost:8080",
    },
    // webpack: (config, options) => {
    //     config.node = {
    //         // Some libraries import Node modules but don't use them in the browser.
    //         // Tell Webpack to provide empty mocks for them so importing them works.
    //         ...config.node,
    //         fs: 'empty',
    //         child_process: 'empty',
    //         net: 'empty',
    //         tls: 'empty',
    //         dns: 'empty',
    //     }

    //     return config
    // },
});