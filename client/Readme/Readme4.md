# First Thing Before Building Any Application , Do planning First

Header
  - Logo
  - Nav-item
Body
  - Search
  - Restarent-Container
     - RestaurentCart
           - Img
           - Name of Res , Star Rating , Cusines , Delivery Time

Footer
  - Copyrights
  - Links
  - Address
  - Contact

# What is Props
  - In React we have something know as props , props (props is called property)
We can passed some data to the component throght the props

- In Javascript when we called a function we passed the argument as a data , as same like that when we render a componene and if we want passed a dynamic data to that component we passed using as a props

# What is Config Driven Ui
 - Our Website is Driven by data is know as config Driven Ui , controlling your Ui (How the ui looks like) control by data (using a config) and the config comes from backend

# Wherever you are looping on the list always keep add key  , But why?
suppose you have add one restarentCart children to first place , but react doesn't recognising uniquly to each children , so  re-rendred all the children because react doest not know which is the new cart is added it will treat all this restarentCart as same, but but if you give each of them as unique id then react render new restarentCard with suppose id(xyz) it not render all restarentCart
suppose you not give uniquely idenfied key(id) to each children , react will re-rendered all this children 

you can used Index as key also , but react itself say that not put index as key , it has bad practise

suppose if you have not unique id in your data then you can used index as a key 

not using Key(not acceptable) <<< index as key <<<<<<<<<<<<<<<<<< unique id(best Practise)

# Why we need a key in React ?
 - When you give a uniquely identitied key to each children if you add new children with some xyz id it not re-render all the children it only re-render the children you have add and apply in changes in dom , if you not give unique id to each children it re-render all the children and decrease the performance of your application thats without key in react not acceptable

# When do we need key in react
- when we are looping the children in that time we need to give key to each children

# Can we use index as a key in React
 - basically we can used it , but using index as a key is not a good practise and react also not recommended to use index as a key

# But why react also not recommended use index as a key?
 - 

# Is Jsx is Mandatory for react?
 - No, it not mandatory for react for creating Component without jsx we can build the Ui using React.createElement , but jsx makes developer easy , sugar Syntatical code ,less code and lots more thing

# Is ES6 mandatory for React
 - No , it not mandatory for react , without using ES6 we can build our app , but using ES6 feactures is good practise in react

# What is React.Fragment
 - React.Fragment is react component that used for wrapping , react always want to return single element from it , so we can wrap using div , but this div seen our dom that not be usable but React.fragment is wrap the code and react sigle element from it and it not visible in the dom
