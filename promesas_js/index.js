fetch('https://dummyjson.com/recipes/1')
.then(res => res.json())
.then(data => {
    console.log(data)
    const nombre = data.name
    const h1 = document.createElement("h1")
    h1.innerText = nombre
    document.body.appendChild(h1)

    //imagen
    const imagen = document.createElement("img");
    imagen.src = "https://cdn.dummyjson.com/recipe-images/1.webp";
    imagen.alt = "Imagen de la receta";
    imagen.style.width = "300px"; 
    imagen.style.height = "auto"; 
    document.body.appendChild(imagen);

    //dificultad
    const DIFICULTAD = document.createElement("h4");
    DIFICULTAD.innerText = "Dificultad";
    const dificultadValor = document.createElement("p");
    dificultadValor.innerText = data.difficulty; 
    document.body.appendChild(DIFICULTAD);
    document.body.appendChild(dificultadValor);

    //tiempo de cocinado
    const TIEMPO1 = document.createElement("h4");
    TIEMPO1.innerText = "Tiempo de cocinado";
    const tiempoValor1 = document.createElement("p");
    tiempoValor1.innerText = data.cookTimeMinutes + " minutos"; 
    document.body.appendChild(TIEMPO1);
    document.body.appendChild(tiempoValor1);
    
    //tiempo de preparación
    const TIEMPO2 = document.createElement("h4");
    TIEMPO2.innerText = "Tiempo de preparación";
    const tiempoValor2 = document.createElement("p");
    tiempoValor2.innerText = data.prepTimeMinutes + " minutos"; 
    document.body.appendChild(TIEMPO2);
    document.body.appendChild(tiempoValor2);

    //ingredientes
    const INGREDIENTES = document.createElement("h2");
    INGREDIENTES.innerText = "Ingredientes";
    document.body.appendChild(INGREDIENTES);
    const ingredientes = data.ingredients;
    const ingredientesElemento = document.createElement("ul");
    for (let i = 0; i < ingredientes.length; i++) {
        const item = document.createElement("li");
        item.innerText = ingredientes[i];
        ingredientesElemento.appendChild(item); 
    }
    document.body.appendChild(ingredientesElemento);
    
    //pasos
    const PASOS = document.createElement("h2");
    PASOS.innerText = "Pasos a seguir";
    document.body.appendChild(PASOS);
    const pasos = data.instructions; 
    const pasosElemento = document.createElement("ol"); 
    for (let i = 0; i < pasos.length; i++) {
    const item = document.createElement("li"); 
    item.innerText = pasos[i]; 
    pasosElemento.appendChild(item);
    }
    document.body.appendChild(pasosElemento);

    //frase final
    const FINAL = document.createElement("h1");
    FINAL.innerText = "LISTA PARA DISFRUTAR";
    document.body.appendChild(FINAL);
})
