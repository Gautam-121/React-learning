# Monolithic and Microservice Architecture

Traditionally the web App developed they developed using monolith architecture , earlier we have a huge big project and suppose we have building an application in the hole big project we have used to small pieces

This project itself has code where there api written , we have Ui code in the same project , we have auth code in same project , we have DB code in the same project , we have sending notification in the same project , even if we have to maje asingle change suppose i want to change the colour of button , what we was to do we was build the whole project , we have compile the whole project , we have deploy the whole project this is called monolithic architecture

But the era moving toward the Microservises acrchitecture , so what the microservices architecture?

So, In microservices architecture we have different services for different jobs , we have a service which has Backend service , we have a UI service , we have a Auth service , we have service for DB , we have services foe Email notification , this are services and microservices all this services combined together and form a big app. for each and small thing we have a different projects and this is known as seperation of concerns and single responsibbility principle it follows the single responcibbilty principle where each and every services has own jobs no one interfering with it


# When to make an api call
                          
                    we wii wait (5000ms) to load data
1) As soon As Page load --> make an api call ---> and when the get the data we have render on the Ui (suppose first 5000ms you not seen anything and suddenly ux appers this is the poor ux experience)

2) AS soon as Page load --> we will quickly render Ui we static data  --> After we will make an api call  --> as soon as we get the result from api call --> we will re-rendered our application with the new data (in react we will always used this approch because this gives a better ux)


# WE have UseEffect hooks 
hook is nothing but a normal javascript utility function that react gives to us where it has there own specific use-case where we used this thing

just like useState has purpouse of creating State-variable as useEffect have there own specific purpouse but what the purpose of the UseEffect?

useEffect(()=>{
console.log("UseEffect Called")
},[]) --> useEffect takes two argument 
1) is callback function
2) is Dependancy Array

# but question arises when my useEffect Hook called ?
it called after your component rendered , suppose your body component  rendered after completely render body component useEffect hooks called

The Purpose of useEffect if i want called anything after my initial component competely rendering we used useEffect

suppse my ui layer depend on backend data , first i was rendered my component with shimmer Ui after component rendered useEffect called we called Api to get the data as soon as we got the data , we re-rendered the component ui actual data 

fetch() ==> fetch is a superpower that given us by browser , given us by js engine , this fetch() , which fetch data from api

const data = fetch("http://localhost:8081/api/v1/getAllRestaurent) --> fetch return promises how we resolved promises using .then and .catch or using async and await we used async - await 

const fetchData = async()=>{
    const data = await fetch("http://localhost:8081/api/v1/getAllRestaurent)
    const json = await data.json()
    console.log(json)
}

# CORS --> Browser block the called one api to another api
- Our browser chrome not allowing to called api from localhost to swiggy 

# Unless we have a data insteat a rendering black page i want to render shimmer Ui This Loading Ui called as Shimmeer UI

# Shimmer Ui --> SShimmer Ui resembled the page as actual Ui , so User will Understand how quickly the web or mobile app load
