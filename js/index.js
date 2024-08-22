const carrito = document.querySelector("#carrito")
const template = document.querySelector("#template").content
const templateFooter = document.querySelector("#templateFooter")
const footer = document.querySelector("#footer")
const fragment = document.createDocumentFragment()
let carritoArray = []

document.addEventListener("click", (e) => {
    console.log("@@@ evento =>" , e)
    if(e.target.matches(".card button")){
        agregarcarrito(e)
    }
})

const agregarcarrito = e => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    }
    console.log("@@@ producto =>" , producto)
}

const index = carritoArray.findIndex((item) => item.id === producto.id)
    if (index === -1) {
        carritoArray.push(producto)
    } else {
        carritoArray[index].cantidad++
    }
    pintarCarrito()
    //console.log("@@@ producto =>",producto,carritoArray)

const pintarCarrito = () => {
    carrito.textContent = ""
    carritoArray.forEach((item) => {
        const clone = template.cloneNode(true)
        clone.querySelector(".text-white .lead").textContent = item.id

        fragment.appendChild(cline)
    })
    carrito.appendChild(fragment)
}