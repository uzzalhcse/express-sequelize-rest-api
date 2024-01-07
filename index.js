const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Routes
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const postRoutes = require('./routes/postRoutes');
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);
app.use('/posts', postRoutes);

// Sync the database and start the server
db.sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });
