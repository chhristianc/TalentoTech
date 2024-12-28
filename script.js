let contenedorProductos = document.getElementById("contenedorProductos");

fetch('https://fakestoreapi.com/products/category/electronics')
.then(res=>res.json())
.then(datos=>
{
    console.log(datos);
    datos.forEach((elemento)=>{
    console.log(elemento.title);
    const contenedorCreado = document.createElement("div");
    contenedorCreado.innerHTML = `
    <div class="divApi">
    
    <img src="${elemento.image}" class="imgApi">
    <h4 class="titleApi">${elemento.title}</h4>
    <p class="priceApi">$${elemento.price}</p>
    <button class="btnApi">Agregar al carrito</button>
    </div>
    `;
    
    contenedorProductos.append(contenedorCreado);
    })
})