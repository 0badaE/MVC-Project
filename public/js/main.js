const  deleteBtn = document.querySelectorAll(".fa.fa-trash")
const film = document.querySelectorAll(".film span")
const filmWatched = document.querySelectorAll(".film span.watched")

Array.from(deleteBtn).forEach((element) =>{
    element.addEventListener("click", deleteFilm)
})

Array.from(film).forEach((element) =>{
    element.addEventListener("click", markWatched)
})

Array.from(filmWatched).forEach((element) =>{
    element.addEventListener("click", markNotWatched)
})


async function deleteFilm(event){
    event.stopPropagation()
    const filmName = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch("deleteFilm", {
            method: "delete",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "itemFromJS": filmName 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.log(err)
    }
}


async function markWatched(){
    const filmName = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch("markWatched", {
            method: "put",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "itemFromJS": filmName 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.log(err)
    }
}

async function markNotWatched(){
    const filmName = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch("markNotWatched", {
            method: "put",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "itemFromJS": filmName 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.log(err)
    }
}