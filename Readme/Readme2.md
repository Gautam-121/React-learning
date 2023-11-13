# What is A Bundler
Bundler basically minified your app so its basically easy to shipped your app to production
example --> WebPack , Parcel , Vite as the bundler
React Uses WebPack as a Bundler

# Caret ^ and Tilda ~
Caret basically upgrade minor version of your package , if yesterday minor version of your package realsed so caret upgrade this minor version automatically
Tilda basically upgrade major version of your package , if yesterday major version of your package realsed so tilda upgrade this minor version automatically
If dont put anything before your package name it remain same it not update automatically

# Package.json
Package.json is configration of npm , it track the current version of our package

# Package-lock.json
as the name suggest it lock the version of our packages , it track the exact version of our package , there is problem arises "it working on local but not working on production" yo avoid this problem package-lock.json keeps a hash (integrity) whatever right now in my dev machine is the same version deployed on the production

# what is transition dependency
Our app is depend on some dependency this dependency have depend on another dependency and its chaining called as transitive dependancy that why if we not insall node_modules t will appers automatically it contain all packages

# gitIgnore Contain those will regenerated like node_modules

# npm vs npx
npm is to intstall first and then used
npx --> if you want to execute a package we used npx

# Parcel
 - It create Dev Build for you
 - it create local server for you
 - parcel automatically refresh your page also (HMR) - Hot Module Replacement
 - parcel uses File Watching Algorithm - written in c++ for automatically refresh page
 - Faster Builds --> How because it caching the thing
 - Parcel also do Image Optimization
 - It do Minification of file also when a do production build
 - Parcel also doing Bundling
 - Compressing the size also
 - It also do Code splitting For you
 - It also Do Differential Bundling -- so it to support to older browser also
 - It give Better Error Suggetion
 - It host Your app Htts also
 - Tree Shaking Algorithm --> remove unused code for you



 # why our app fast 
-- There are many t# Parcel 
(Parcel/webpack is a bundler that minified our code , optimised our code and makes our code as a production Ready code)

 - Different dev (npx parcel index.html) and prod Bundles (npx parcel build index.html) (dist folder contain diiferent dev bundles and different prod bundles basically it minified the code optimised the code and generate bundles)
 - Parcel is more faster beacuse it store parcel-cache in (.parcel-cache file)

# What us .parcel-cache 
 - basically parcel storing caching inside the parcel-cache for faster build , so for ecach changes HMR builds thing in faster phase

# Tree Shaking
 - Tree shaking is a process in modern JavaScript bundlers like Parcel that eliminates dead code from your final bundled output. The goal is to remove any code that is not actually used or referenced in your application, reducing the size of the bundle that needs to be downloaded by the browser.

# HMR
 - Hot Module Replacement (HMR) is a feature in modern JavaScript bundlers like Parcel that allows you to update parts of your application in real-time without requiring a full page reload.

# Dynamic Update of Modules:
When you make changes to your code, instead of refreshing the entire page, Parcel uses HMR to identify the specific modules that have been modified.

# Real-Time Module Replacement:
Parcel then replaces only the modified modules in the running application, preserving the state of the rest of the application. This update happens in real-time, without the need for a manual page refresh.

# Preservation of State:
One of the key benefits of HMR is that it preserves the current state of your application. If you've changed the state of a component or have data loaded, HMR ensures that you don't lose that state during the module update.

# What is dist
 - The bundled and optimized files are placed after the build process. It contains the final version of your application that is ready for deployment to a web server or hosting service.

 # BrowserList
  - Package is set Configration where is my app working properly (i have maintion last 10 version -- that means it working properly on last 10 version but before 10 version may be it working properly may not)

# What is Script Type in html
