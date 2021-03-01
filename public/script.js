



async function burgerList() {
    // 1. call server and get quotes: /api/quotes
    const burger = await fetch('/api').then(r => r.json())

    // 2. loop through and display data
    document.querySelector('#unteatenList').innerHTML = ''
    burger.forEach(burgers => {
        document.querySelector('#unteatenList').innerHTML += `
        <form action='/api/burger/${burgers.id}' method="POST">
        <div class="input-group mb-3">
        
        <li id="unEatenBrgr" class="form-control fas fa-hamburger">
            <b>${burgers.burger_name} </b>
                <span class="align-center">🍔</span>
        </li>
        <span class="input-group-btn"></span>

        <button onClick="eatBurger('${burgers.id}')" class="card-link btn btn-danger btn-sm">Devour it</button>

        </span>
    </div>
    </form>
        `
      
    })
}
burgerList()

async function eatBurger( id ){
   
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json'},
        method: 'post'
    }
    const result = await fetch( `/api/burger/${id}`, fetchOptions ).then( r=>r.json() )

    // reload the quotes with the deleted ones now gone
    burgerList()
}

async function eatenburgerList() {
    // 1. call server and get quotes: /api/quotes
    const burger = await fetch('/api/eaten').then(r => r.json())

    // 2. loop through and display data
    document.querySelector('#eatenList').innerHTML = ''
    burger.forEach(burgers => {
        document.querySelector('#eatenList').innerHTML += `
        <form action='/api/burger/${burgers.id}' method="POST">
        <div class="input-group mb-3">
        
        <li id="eatenBrgr" class="form-control fas fa-hamburger">
            <b>${burgers.burger_name} </b>
                <span class="align-center">🍔</span>
        </li>
        <span class="input-group-btn"></span>

        <button onClick="deleteBurger('${burgers.id}')" class="card-link btn btn-danger btn-sm">Delete</button>

        </span>
    </div>
    </form>
        `
      
    })
}

eatenburgerList()

async function deleteBurger( id ){
   
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json'},
        method: 'delete'
    }
    const result = await fetch( `/api/burger/${id}`, fetchOptions ).then( r=>r.json() )

    // reload the quotes with the deleted ones now gone
    burgerList()
}