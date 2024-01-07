// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../app/http/controllers/transactionController');

router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.createTransaction);

// Add other routes as needed

module.exports = router;
