// middleware/fileUploadMiddleware.js
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder for file uploads
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const fileUploadMiddleware = (fieldName) => {
    return upload.single(fieldName);
};

module.exports = fileUploadMiddleware;
