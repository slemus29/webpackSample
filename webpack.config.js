module.exports = {
    mode:'development',
    module:{
        rules: [
            {
                test: /\.santy?$/,
                loader: './santy-loader.js'
            }
        ]
    }
}