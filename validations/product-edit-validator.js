const {check,body} = require('express-validator');


module.exports = [
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio'),
    check('address')
        .notEmpty().withMessage('La dirección es requerida'),
    check('url_map')
        .notEmpty().withMessage('La ubicación es requerida'),
    check('category')
        .notEmpty().withMessage('La categoría es requerida'),
    check('description')
        .notEmpty().withMessage('La descripción es requerida'),
]