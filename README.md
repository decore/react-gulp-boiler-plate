# React boiler plate

** Work in progress

The goal of this project is to provide a simple startup project that will support typescript (ts/tsx) and a well structure bundling / build process.

- Other enhancements:
  + Adding map support (easier debugging).
  + Typescript support.

- Future enhancements:  
  + gulpfile.test.js: here we could place all karma / test config / tasks.
  + Redux support.
  + React-Router support.

##This starter kit gives you the following:

- React.  
- Webpack bundling.  
- Typescript support.
- Simple project structure


##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. `npm install webpack -g` - Installs webpack
3. Download this repo
4. Open the command line of your choice and cd to the root directory of this repo on your machine  
5. `npm install` - Installs packages
6. `npm start` - Builds the project and opens your browser.
7. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.

##Change Log
* Aug 20, 2015 - Updated to use gulp-open 1.0.0 and browserify 11.0.1 since the course has been updated to use these versions.  
* Jan 23, 2015 - Fixed missing quotes around jQuery globals in .eslintrc.
* Feb, 2, 2016 - Divided gulp files per area, added map support.
* Feb, 18, 2016 - Migrated to webpack and added typescript (ts / tsx) support.
* Feb, 23, 2016 - Added a basic component structure (app / header / page).
* Feb, 23, 2016 - Remove gulp dependency, only using Webpack (index.html, ts, tsx, css, etc.).
