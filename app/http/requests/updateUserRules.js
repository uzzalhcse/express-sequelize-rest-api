// http/requests/createUserRules.js
const { body } = require('express-validator');

const createUserRules = [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
];

module.exports = createUserRules;
