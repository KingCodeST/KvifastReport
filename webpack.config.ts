const HtmlWebpackPlugin =require('html-webpack-plugin');


module.exports ={
    entry:'./src/main.ts',
    resolve:{
        extensions: ['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:['ts-loader','angular2-template-loader']
            },
            {
                test:/\.(html|css)$/,
                use:'raw-loader'
            }
        ]
    },

    Plugins:[
        new HtmlWebpackPlugin({ template:'./src/index.html'})
     ],
    devServer:{
        historyApiFallBack:true
    }




}