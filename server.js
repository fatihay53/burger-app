const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

const orm = require( './app/orm' )

// will share any static html files with the browser
app.use( express.static('public') )

// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Routes (Endpoints) =========================================
app.get( '/api' , async function( req, res ){
    const burgerList = await orm.getBurger()
    
    res.send(burgerList)
  
})

app.post( "/api/burger/add", async function( req, res ){
    const burger = req.body
    console.log(burger)
    const result = await orm.insertBurger( burger )

    

    res.redirect( '/index.html' )
})

app.delete( '/api/:id', async function( req, res ){
    const id = req.params.id
    console.log(id)

    const result = await orm.deleteBurger( id )

    res.send( { message: `Deleted ${id}` } )
})



// app.put('api/quotes/:id',async function(req,res){
//     const id = req.params.id
//     const result = await orm.updateQuote(id)
//     res.send( { message: `update ${id}` })
// } )
// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Serving content on http://localhost:${PORT}`)
})
