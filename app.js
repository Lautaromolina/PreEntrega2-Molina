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

let oro = 500;
