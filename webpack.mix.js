const mix = require("laravel-mix");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-custom-properties"),
    ]);

mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            host: "localhost",
            port: 3000,
            proxy: "http://127.0.0.1:8000", // Change this to your local development URL
            files: [
                "app/**/*.*",
                "resources/views/**/*.blade.php",
                "public/**/*.*",
                "resources/js/**/*.js",
                "resources/css/**/*.css",
                "resources/sass/**/*.scss",
            ],
        }),
    ],
});
