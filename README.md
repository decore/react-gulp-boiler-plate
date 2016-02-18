# React boiler plate

** Work in progress

Initial Fork of @coryhouse on flux starter kit, plus adding typescript support (based on @markogresak seed project). The goal of this project is to provide a simple startup project that will support typescript (ts/tsx) and a well structure bundling / build process.

- Division proposal:

  + gulpfile.js: main gulfile.
  + gulpfile.config.js: config consts.
  + gulpfile.build.js: all things related with packaging (transpile, bundling js, css, linter...)
  + gulpfile.browser.js: connect web server and live reload.

- Other enhancements:
  + Adding map support (easier debugging).
  + Typescript support.

- Future enhancements:  
  + gulpfile.test.js: here we could place all karma / test config / tasks.

##This starter kit gives you the following:

- React.  
- Webpack bundling.  
- Typescript support.


##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. `npm install webpack -g` - Installs webpack
3. `npm install webpack-dev-server -g` - Installs webpack dev server
4. Download this repo
5. Open the command line of your choice and cd to the root directory of this repo on your machine  
6. `npm install` - Installs packages
5. `npm install -g gulp` - Installs gulp globally. [Why globally?](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
5. `npm start` - Builds the project and opens your browser.
6. Navigate to [http://localhost:9005/](http://localhost:8080/) if your browser doesn't open automatically.

##Change Log
* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2015 - Fixed missing quotes around jQuery globals in .eslintrc.
* Feb, 2, 2016 - Divided gulp files per area, added map support
* Feb, 18, 2016 - Migrated to webpack and added typescript (ts / tsx) support
