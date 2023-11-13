# What is React Element
 - React Element At the end of day is normal javascript Object

# What is JSX
 - JSX is javascript syntax , the way to create ReactElement  (we can create App without JSX also but jsx makes our developer life easy that why we used jsx)
 - JSX is not html inside javascript , but it html like syntax or look like xml

# How jsx working on Browser or Behind the Scenes of JSx
 - JS engine doesn't understood jsx code (so it transpiled before reaches to js engine) (transpiled - transpiled means this code is converted to the code that browser can understand) so who is transPiling this code , so parcel is transpiling this code but parcel not only do this , it act as a manager it give this task to babel (babel is javascript compiler we called as transpiler)

JSX --------------> React.createElement()(Js Object)--------->root.render(ReactElement)(HTML)
   (babel Converting)

babel does lot of transpilation --> that new ES6 module that older browser doesn't understand babel transcompiled this code so older browser understood

# Advantages or Benefit of writing Code in JSX

- JSX prevents Cross-site scripting attack for you , when you calling api to fetch the data , if some malicious (attack) data comes , jsx not blaindly run this data , first it sanitaized the data and prevent from Cross-site scripting


# Who will Makes Our web App Readble
 - Basically Jsx makes Our Web app Readable , it increase the developer experienced , less code , sugar syntatical code , maaintabillity , less Code

JSX has soperpower to write any piece of js code inside it using curly baraces {js code}

# What is Polyfiils
- Polyfills basically writting a newer version of code in older way so , older browser can understood.

Example :- Map is ES6 feature that Newer browser supported but this map not supported by older browser so we have create the polyfills of maps it same logic that inside in amp but using older way of js code so older browser also understand the code

basically all this transpilation are done by the bable , also bable remove console from our web app using babel plugin name as "bable-plugin-transform-remove-console"


# Single Line and Multiple Line
 - if you write single line jsx is perfectly valid
 ex:- const heading = <h1>This is Heading</h1>

 - But in multiple line jsx it neccesssary to wrap inside the round brackets , but why ?
 because jsx it understood where is my code start and where is end
 ex:- const heading = (<h1 className="heading">
    This is Heading</h1>)

# React Component
 - React Component at tge end of the day is normal javascript function that return some piece of jsx

There Are Two types of Components in React
- Class Based Components --> Older Way to create Components
- Functional Components ---> Newer Way to write a Components

component inside the component is called component composition

Function Component or Any Component there name always start with capital letter

# React.createElement vs JSX
 - React.createElement at the end of the day is normal javascript Object , but JSX is javascript XMl or html like syntex inside the javascript

 - Bable transpiled JSX in to React.createElement

 - JSX makes code readable , increase Developer Expericed , less code , sugar syntatical code , maintabillity but React.createElement not increase the Developer expericed , writting more code 

 - JSX prevent from cross-site scripting not blindly run the data , it sanitized the code first

# Babel or Parcel Role in JSX
 - JS engine not know what is jsx , if you run jsx on browser it directly throw error , parcel comes into the picture it acts as a manager give responsibillity to babel to tarscompilled the jsx code before reaching to js engine , so bable convert jsx into React.createElement so in that way parcel and babel makes there roles in JSX




