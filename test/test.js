 const webpack = require('webpack'),
     ExportModulePlugin = require("../lib/");

let config={
     entry: {
            app: "./test/testFiles/app.js"
        },
        output: {
            path: './test/testOut/',
            filename:"[name].js"
        },
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules|scripts)/, "../node_modules/jquery", "../node_modules/angular"]
            }]
        },
        plugins: [new ExportModulePlugin({
            rootPath:"./test/testFiles/"
        }) ]
    };


webpack(config,  (err, stats)=> {

    });
