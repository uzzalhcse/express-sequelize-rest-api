// controllers/transactionController.js
const TransactionRepository = require('../../repositories/transactionRepository');

class TransactionController {
    async getAllTransactions(req, res) {
        const transactions = await TransactionRepository.getAllTransactions();
        res.json(transactions);
    }

    async createTransaction(req, res) {
        try {
            const { amount, description, userId } = req.body;
            const newTransaction = await TransactionRepository.createTransaction({ amount, description, userId });
            res.json(newTransaction);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Add other methods as needed
}

module.exports = new TransactionController();
