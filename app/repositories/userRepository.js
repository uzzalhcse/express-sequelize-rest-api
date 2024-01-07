// repositories/userRepository.js
const { User } = require('../../models');
const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository{
}

module.exports = new UserRepository(User);
