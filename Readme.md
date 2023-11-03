# Ways of adding content inside HTMl 
1) Using Html
2) Using Javascript
3) Using React Core

# React.createElement() , ReactDom.createRoot()
1) Using React.createElement("tag" , {props} , "content") --> using Core-React Creating React-Element
2) ReactDOM.createRoot() --> creating and Pointing to id --> root in index.html file 

At The End of the Day ReactElement is javascript Object and when you render the reactElement convert this React-Object to the html and replace the whole root content with this ReactComponent

# Ways To Add React In Project
1) Using CDN --> CDN is Not A Good Way to add React Inside --> Because As version chnages it not automatically change the CDN version so it work statically
2) Using NPM

# What is CDN (Content-Delivery Network)
1) It Deliver A Content for the perticular Request . CDN Network is WorldWide distrubuted so it check the request and send request to nearBy Server for proceesing and Sending Respond to that Request.
2) It Also Stored The caching so it check this request Respond chache already exit so it send respond from the cache layer without forwarding request to the server , so it send faster respond.

# NPM --> NPM is package manager for javascript programming laungage it is default package manager for javascript programming laungage of node js

package.json --> Package.json is json file prent bottom of our project it contain meta-data about our project like Project-name , script , version , dependancy , primary-Entry-Point and more

main --> Main is Primary Entry Point of our Project
dependency --> As the name suggest , on which packages our project is depend is called dependency

# normal-dependency and Dev-dependency
1) Normal-dependency --> are used at the time of develement as well as production 
2) Dev-dependancy ---> are used at the time of developent not in production time

# JSX (Javascript XML)
1) JSX has html like syntex but not actual html or dom , it look like html 
2) In JSX , you can assign any piece of javascript code inside it

* When You render JSX on Browser , browser doesn't know what is JSX , so "Babble" Comes into the picture and convert
JSX --> React Element (Javascript Object) ---> ReactDom.render() Conver (Javascript Object) into the html and render inside the root

# what is Component
Component at the end of the day it is a normal javascript function that return some piece of jsx from it.

* Component Naming Conventions: It's a convention in React to name components with an initial uppercase letter. This helps distinguish between HTML tags and React components in JSX.

# Three Ways To Render A React Component

1) <Component> -->  When using the JSX syntax (<Component />), if a component doesn't have any children, it's common to use a self-closing tag

2) <Component></Component> --->  if a component have any children

3) Component() -->  (Component()) is not a common or recommended practice in React development.