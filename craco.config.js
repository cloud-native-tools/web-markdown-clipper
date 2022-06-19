module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            let htmlPlugin = webpackConfig.plugins[0];
            htmlPlugin.options.excludeChunks = [
                "content",
                "background"
            ];
            return {
                ...webpackConfig,
                entry: {
                    main: paths.appIndexJs,
                    content: './src/content.ts',
                    background: './src/background.ts',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            };
        },
    }
};
