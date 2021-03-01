



async function getUnEatenList() {
    // 1. call server and get quotes: /api/quotes
    const burger = await fetch('/api').then(r => r.json())

    // 2. loop through and display data
    document.querySelector('#unteatenList').innerHTML = ''
    burger.forEach(burgers => {
        document.querySelector('#unteatenList').innerHTML += `
        <div class="input-group mb-3">
        <li class="form-control fas fa-hamburger">
            <b>${burgers.burger_name} </b>
                <span class="align-center">🍔</span>
        </li>
        <span class="input-group-btn"></span>

        <button onClick="eatBurger('${burgers.id}')" class="card-link btn btn-secondary btn-sm">Devour it</button>

        </span>
    </div>
        `
      
    })
}
getUnEatenList()


async function eatBurger( id ){
   
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json'},
        method: 'delete'
    }
    const result = await fetch( `/api/${id}`, fetchOptions ).then( r=>r.json() )

    // reload the quotes with the deleted ones now gone
    getUnEatenList()
}

