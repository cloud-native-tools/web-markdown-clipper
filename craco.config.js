module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // console.log(env);
            // console.log(paths);
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
