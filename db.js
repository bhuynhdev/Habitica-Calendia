// Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection

const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${db.connection.host}`)
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

module.exports = connectDB; 


