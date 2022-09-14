const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("This error is from the config/database.js");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
