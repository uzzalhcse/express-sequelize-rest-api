// repositories/transactionRepository.js
const { Transaction } = require('../../models');
const BaseRepository = require('./baseRepository');

class TransactionRepository extends BaseRepository {
    async createTransaction(transaction) {
        return Transaction.create(transaction);
    }

    async getAllTransactions() {
        return Transaction.findAll();
    }

    // Add other CRUD methods as needed
}

module.exports = new TransactionRepository(Transaction);
