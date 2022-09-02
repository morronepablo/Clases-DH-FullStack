const productsController = {
    all: (req, res) => res.render('index',{
        nombrePagina: 'Productos'
    }),
    details: (req, res) => {
        
         res.render('products/productDetail', {
             nombrePagina: 'Detalles del Producto',
             titulo: 'Detalle de producto'
         })
    },
    create: (req, res) => res.render('productCreate',{
        nombrePagina: 'Alta de Productos',
        titulo: 'Alta de Productos'
    })
}

module.exports = productsController