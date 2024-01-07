// controllers/userController.js
const UserRepository = require('../../repositories/userRepository');
const createUserRules = require('../../http/requests/createUserRules');
const updateUserRules = require('../../http/requests/createUserRules');
const validatorMiddleware = require('../../http/middleware/validatorMiddleware');
const fileUploadMiddleware = require("../middleware/fileUploadMiddleware");

class UserController {
    getAllUsers = async (req, res) => {
        const users = await UserRepository.getAll();
        res.json(users);
    }

    getUserById = async (req, res) => {
        const { id } = req.params;
        const user = await UserRepository.getById(id);
        res.json(user);
    }

    createUser = [
        fileUploadMiddleware('avatar'), // Handle file upload for 'avatar' field
        ...validatorMiddleware(createUserRules),
        async (req, res) => {
            try {
                const { name, email } = req.body;
                const avatar = req.file ? req.file.filename : null; // Save the file name

                const newUser = await UserRepository.create({ name, email, avatar });
                res.json(newUser);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        },
    ];

    updateUser = [
        // ... other validation rules if needed ...
        ...validatorMiddleware(updateUserRules),
        async (req, res) => {
            const { id } = req.params;
            const updatedUser = req.body;
            await UserRepository.update(id, updatedUser);
            res.json({ message: 'User updated successfully' });
        },
    ];

    deleteUser = async (req, res) => {
        const { id } = req.params;
        await UserRepository.delete(id);
        res.json({ message: 'User deleted successfully' });
    }
}

module.exports = new UserController();
