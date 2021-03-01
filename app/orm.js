
const db = require( './connection' )('burgers_db','password123')

async function getBurger (){
    return db.query("SELECT * FROM burgers where devoured=0")
}

function insertBurger( burger ){
    return db.query( `INSERT INTO burgers (burger_name,devoured) VALUES(?,?)`, 
        [burger.burger_name,false] )
}


function deleteBurger( id ){
    return db.query( `DELETE FROM burgers WHERE id='${id}'`)

}
function updateBurger(id){
    return db.query(`Update burgers set devoured=1 where id = ${id}`)
}
function eatenBurger(){
    return db.query("SELECT * FROM burgers where devoured=1")
}



module.exports = { getBurger,insertBurger,deleteBurger,updateBurger,eatenBurger}