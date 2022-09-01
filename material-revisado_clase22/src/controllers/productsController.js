const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* La constante "toThousand" deben enviarla como parametro en el res.render,
les ayudará para mostrar el precio final adecuadamente con 
una cantidad de decimales fija. Es una función, solamente deben poner
como parámetro el precio final (en el archivo ejs): toThousand(finalPrice)*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// (get) Root - Mostrar todos los productos
	index: (req, res) => {
		// Do the magic
	},

	// (get) Detail - Detalle de un producto
	detail: (req, res) => {
		// Do the magic
	},

	// (get) Create - Formulario para crear
	create: (req, res) => {
		// Do the magic
	},
	
	// (post) Create - Método para guardar la info
	store: (req, res) => {
		// Do the magic
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		// Do the magic
	},
	// (put) Update - Método para actualizar la info
	update: (req, res) => {
		// Do the magic
	},

	// (delete) Delete - Eliminar un producto de la DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;