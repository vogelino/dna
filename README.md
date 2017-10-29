## Advanced Web: Project Setup

Small bootstrap setup for your own project.

### Start

``` bash
$ npm start
```

Starts a new server under `http://localhost:3000/`, rebuilds all your files and watches for changes to rebuild again and reload your site.

### Build

``` build
$ npm run build
```

Use this command to clean up your `dist` folder and create a final build of your site.

### Folder Structure

```
├── assets
├── dist
├── node_modules
├── scripts
│   └── index.js
├── styles
│   └── index.css
├── gulpfile.js
├── index.html
└── package.json
```

`assets` — Contains all non CSS and JavaScript files, like images, fonts, etc.

`dist` — The final distribution of your project. Contains all necessary files preprocessed and minified. Upload this to your webserver.

`node_modules` — Node dependencies like Gulp, PostCSS or Rollup are installed in here.

`scripts` — Contains the `index.js` file. You can use ES6 imports to import other files from this directory (advanced). Rollup is used to concat all fils into one `dist/index.js` file.

`styles` — Contains the `index.css` file. You can use the `@import` rule to import other files from this directory. PostCSS is used to concat all files into one `dist/index.css` file and also to autoprefix and add some more goodness to your final CSS file.

`gulpfile.js` — Contains our Gulp task configuration. Extended this if you are missing anything (advanced).

`index.html` — Our entry HTML file for the website. Add more `*.html` files to the root directory if you want to have multiple pages.

`package.json` — Contains our Node dependency configuration. Add this with your own dependencies via `npm install` (advanced).
