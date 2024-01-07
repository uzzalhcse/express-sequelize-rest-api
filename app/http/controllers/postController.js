// controllers/postController.js
const PostRepository = require('../../repositories/postRepository');

class PostController {
    async getAllPosts(req, res) {
        const posts = await PostRepository.getAll();
        res.json(posts);
    }

    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await PostRepository.getById(id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createPost(req, res) {
        try {
            const { title, content, user_id } = req.body;
            const newPost = await PostRepository.create({ title, content, user_id });
            res.json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updatePost(req, res) {
        try {
            const { id } = req.params;
            const updatedPost = req.body;
            const result = await PostRepository.update(id, updatedPost);
            res.json({ message: 'Post updated successfully', result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deletePost(req, res) {
        try {
            const { id } = req.params;
            await PostRepository.delete(id);
            res.json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = new PostController();
