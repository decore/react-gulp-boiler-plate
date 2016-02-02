# React boiler plate

Fork of @coryhouse great work on flux starter kit. In real project, gulp / grunt taks definition file tend to be too big and hard to maintain, in this fork we are  trying to chop gulp functionality in separate files, just for the sake of maintanibility.

- Division proposal:

  + gulpfile.js: main gulfile.
  + gulpfile.config.js: config consts.
  + gulpfile.build.js: all things related with packaging (transpile, bundling js, css, linter...)
  + gulpfile.browser.js: connect web server and live reload.

- Other enhancements:
  + Adding map support (easier debugging).

- Future enhancements:
  + Typescript support.
  + gulpfile.test.js: here we could place all karma / test config / tasks.

##This starter kit gives you the following:

- React, React Router, and Flux for ultra-responsive UI development  
- Browserify bundling  
- jQuery with Bootstrap for styling  
- Gulp build that:  
-- compiles JSX  
-- lints JSX and JS via ESLint  
-- bundles JS and CSS files  
-- migrates the built app to the dist folder  
-- runs a dev webserver  
-- opens your browser at the dev URL  
-- reloads the browser upon save
-- debug map support.
-- All this is divided and organized in different files per area.

##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo
3. Open the command line of your choice and cd to the root directory of this repo on your machine  
4. `npm install` - Installs packages
5. `npm install -g gulp` - Installs gulp globally. [Why globally?](http://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)
5. `gulp` - Builds the project and opens your browser.
6. Navigate to [http://localhost:9005/](http://localhost:9005/) if your browser doesn't open automatically.

You're now all set to [follow along with the course](http://www.pluralsight.com/author/cory-house)!


##Change Log
* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2015 - Fixed missing quotes around jQuery globals in .eslintrc.
* Feb, 2, 2016 - Divided gulp files per area, added map support
