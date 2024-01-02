const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(`mongodb+srv://processnothing:9899742900@cluster0.dptkfe3.mongodb.net/portfolio`)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
