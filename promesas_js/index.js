fetch('https://dummyjson.com/recipes/1')
.then(res => res.json())
.then(data => {
    console.log(data)
    const nombre = data.name
    const h1 = document.createElement("h1")
    h1.innerText = nombre
    document.body.appendChild(h1)

    //dificultad
    const dificultad = data.difficulty
    const dificultadElemento = document.createElement("p")
    dificultadElemento.innerText = dificultad
    document.body.appendChild(dificultadElemento)

    //ingredientes
    const titulo = document.createElement("h2");
    titulo.innerText = "Ingredientes";
    document.body.appendChild(titulo);
    const ingredientes = data.ingredients
    const ingredientesElemento = document.createElement("ul")
    ingredientesElemento.innerText = ingredientes
    document.body.appendChild(ingredientesElemento)
    for (let i = 0; i < data.ingredientes.length; i++) {
        const item = document.createElement("li");
        item.innerText = data.ingredientes[i];
        lista.appendChild(item);
    }
    document.body.appendChild(lista);


    const pasos = data.instructions
    const pasosElemento = document.createElement("ul")
    pasosElemento.innerText = pasos
    document.body.appendChild(pasosElemento)
    
})


