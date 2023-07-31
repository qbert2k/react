const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        });

        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to DB');
    }
};

module.exports = {
    dbConnection
};