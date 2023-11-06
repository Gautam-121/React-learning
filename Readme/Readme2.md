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
-- There are many thing we have used to make our app fast not only react , react is also the part that make our app fast but not only react , behind the seen there are many pasckages that makes our app fast like Parcel or bundler , Babble