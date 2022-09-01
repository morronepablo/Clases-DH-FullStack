const { validationResult } = require("express-validator");

const mainController = {
	index: (req, res) => {
		res.render("index.ejs", { 
			data: null, 
			errors: [], 
			color: req.cookies?.color
		});
	},
	submit: (req, res) => {
		const formulario = req.body;
		const cookies = req.cookies;
		const data = req.body;
		const color = formulario.color || cookies.color;
		const { errors } = validationResult(req);
		if(formulario.saveColor){
			res.cookie('color', formulario.color, { maxAge: (1000 * 60) * 2 });
		} else {
			res.clearCookie('color');
		}
		console.log(data);
		res.render("index.ejs", { 
			data, 
			errors,
			color
		});
	}
};

module.exports = mainController;