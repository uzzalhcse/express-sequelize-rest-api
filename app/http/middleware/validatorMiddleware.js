// middleware/validatorMiddleware.js
const { validationResult } = require('express-validator');

const validatorMiddleware = (validationRules) => {
    return [
        ...validationRules,
        async (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
};

module.exports = validatorMiddleware;
