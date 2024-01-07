// http/requests/createUserRules.js
const { body } = require('express-validator');

const createUserRules = [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('avatar').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Avatar is required');
        }
        return true;
    }),
];

module.exports = createUserRules;
