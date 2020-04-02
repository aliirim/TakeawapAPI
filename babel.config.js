module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        'app': './',
                        'assets': './assets',
                        'components': './components',
                        'constants': './constants',
                        'context': './context',
                        'helpers': './helpers',
                        'navigation': './navigation',
                        'screens': './screens',
                        'services': './services',
                    },
                },
            ],
        ],
    }
}
