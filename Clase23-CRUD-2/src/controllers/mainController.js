const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const ultimasVisitas = products.filter(products => products.category == 'visited');
		const ofertasDelDia = products.filter(products => products.category == 'in-sale');
		res.render('index',{ 
			products,
			ultimasVisitas,
			ofertasDelDia
		 })
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
