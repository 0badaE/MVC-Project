const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const PORT = 5000
require("dotenv").config()

// Connect to DataBase: 
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'FilmsTo-Watch'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

// Server Setup: 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//GET Request:
app.get("/", async (request, response) =>{
    try {
    const toWatch = await db.collection("Films").find().toArray();
    const filmsLeft = await db.collection("Films").countDocuments({ completed: false});
    response.render("index.ejs", { items: toWatch, left: filmsLeft})
    } catch (error) {
        console.error(error)
    }
})

//POST Request: 
app.post("/addToWatch", (request,response) => {
    db.collection("Films").insertOne({film: request.body.toWatchFilm, completed: false})
    .then(result => {
        console.log("Film Added")
        response.redirect("/")
    }) .catch(error => console.error(error))
})

//PUT Requests: 
//1) 
app.put("/markWatched", (request,response)=>{
    db.collection("Films").updateOne({film: request.body.itemFromJS}, {
        $set: {
            completed: true
        }
    },{
        sort: {_id: -1},
        upsert: false
    })
    .then(result => {
        console.log("Marked Watched!")
        response.json("Marked Watched!")
    })
        .catch(error => console.error(error))
    })

//2) 
app.put("/markNotWatched", (request,response)=>{
    db.collection("Films").updateOne({film: request.body.itemFromJS}, {
        $set: {
            completed: false
        }
    },{
        sort: {_id: -1},
        upsert: false
    })
    .then(result => {
        console.log("Marked Not Watched!")
        response.json("Marked Not Watched!")
    })
        .catch(error => console.error(error))
    })

//DELETE Request: 
app.delete("/deleteFilm", (request,response)=>{
    db.collection("Films").deleteOne({film: request.body.itemFromJS})
    .then(result => {
        console.log("Film Deleted")
        response.json("Film Deleted")
    })
        .catch(error => console.error(error))
})

// Port: 
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
