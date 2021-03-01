
const db = require( './connection' )('burgers_db','password123')

async function getBurger (){
    return db.query("SELECT * FROM burgers where devoured=0")
}




function insertBurger( burger ){
    return db.query( `INSERT INTO burgers (burger_name,devoured) VALUES(?,?)`, 
        ["burger",false] )
}


function deleteBurger( id ){
    return db.query( `DELETE FROM burgers WHERE id='${id}'`)

}
// function updateQuote (id){
//     return db.query(`update quotes where id = '${id}'`)
// }
module.exports = { getBurger,insertBurger,deleteBurger}