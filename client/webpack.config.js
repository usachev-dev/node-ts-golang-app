const path = require('path');

module.exports = {
    entry: {
        index: './src/index.ts',
        home: './src/home.ts',
        game: './src/game.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../public'),
    },
};
