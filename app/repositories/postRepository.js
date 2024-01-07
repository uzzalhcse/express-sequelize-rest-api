// repositories/postRepository.js
const { Post } = require('../../models');
const BaseRepository = require('./baseRepository');

class PostRepository extends BaseRepository {
    // You can add specific methods for Post if needed
}

module.exports = new PostRepository(Post);
