const elixir = require('laravel-elixir');
const connectPHP = require('gulp-connect-php');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
        .webpack('app.js')
        .version([
            'css/app.css',
            'js/app.js'
        ])
        .browserSync({
        	proxy: 'http://127.0.0.1:8000'
    	});
    connectPHP.server({
        base: './public',
        hostname: '0.0.0.0',
        port: 8000
    });
});
