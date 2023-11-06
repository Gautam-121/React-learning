# Parcel 
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
