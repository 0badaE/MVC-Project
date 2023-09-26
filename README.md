# FilmList
film list - full stack app linked with a MDB DB (could not host since Heroku is no longer free) 

This is my very first full stack web application!

This is a Film list where the user can create a list of film he would like to watch, there is a counter that counts down how many films are left
and when the user presses on the film he already watched the film gets crossed out and the counter gets substracted by 1. 

The film list is stored in a MongoDB Database that is the special part of this app. 

I used an MVC architecture to build this app, all things regarding the viewing are stored together, all things regarding  

I will provide screenshots to show how the film list app

![image](https://github.com/0badaE/FilmList/assets/105763414/c661c0e7-a016-4dde-a569-57b25f107c01)


Below, I will demonstrate how MVC works based on my understanding and why I chose to use this architecture: 

![image](https://github.com/0badaE/FilmList/assets/105763414/9bd871ee-32cb-432e-941a-78e8596175e5)


Controller is the middleman for the Model and View, it is what processes the GET,POST,PUT and DELETE requests. This is the server side logic

Model is what retrieves items from the DB, you can think of it as the brains of the operation. It is also where we make Schemas

View is the rendering side, we take the details from the Model and put them onto a viewable format such as HTML, then it is sent back to the Client. 


MVC is a good architecture to adopt since it seperates tasks from each other and makes it easier to work in teams. Also if one thing breaks, it becomes easier to maintain
since everything is seperated, the view will not affect the model which will not affect the controller. 

I learned a lot while building this project! 
