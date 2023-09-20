class Item {
	constructor(nombre, precio, imagen) {
		this.nombre = nombre;
		this.imagen = imagen;
		this.precio = precio;
	}
}

const pocion = new Item("Pocion de Vida", 80, "pocion.png");
const carne = new Item("Carne", 35, "carne.png");
const cerezas = new Item("Cerezas", 15, "cerezas.png");
const espada = new Item("Espada", 150, "espada.png");
const escudo = new Item("Escudo", 90, "escudo.png");
const deathstar = new Item("DeathStar", 100000000000, "deathstar.png");

const inventario = [];

let oro = 100000000500;

const elOro = document.querySelector("#oro span");
elOro.innerText = oro;
const elInventario = document.getElementById("inventario");

function comprar(event) {
	const nombreItem = event.target.textContent;
	const itemDelJuego = elementos.find((element) => element.nombre === nombreItem);

	if (oro - itemDelJuego.precio >= 0) {
		inventario.push(itemDelJuego);
		oro -= itemDelJuego.precio;
		actualizarHtml();
	} else {
		alert(` No tenes el oro suficiente para comprar ${itemDelJuego.nombre}. Si quiere puede vender algunos items solo haga click en alguno de ellos`);
	}
}

function vender(nombreItem) {
	const itemDelJuego = elementos.find((element) => element.nombre === nombreItem);
	if (itemDelJuego) {
		oro += itemDelJuego.precio;
		const indice = inventario.indexOf(itemDelJuego);
		inventario.splice(indice, 1);
		actualizarHtml();
	}
}

function actualizarHtml() {
	elInventario.innerHTML = "";
	for (const itemDelJuego of inventario) {
		const li = `<li onclick="vender('${itemDelJuego.nombre}')"><img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}"</li>`;
		elInventario.innerHTML += li;
	}
	elOro.innerText = oro;
}

let elementos = [pocion, carne, cerezas, espada, escudo, deathstar];
let container = document.getElementById("contenedor");
container.innerHTML = ` <h1> Buen dia Mi Señor ¿Que esta buscando? </h1> `;

let ul = document.createElement("ul");

elementos.forEach((element) => {
	let li = document.createElement("li");
	li.textContent = element.nombre;

	li.addEventListener("click", comprar);

	ul.appendChild(li);
});

container.appendChild(ul);
