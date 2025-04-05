const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
mongoose.Promise = global.Promise;
const dbconnect = () =>
  mongoose
    .connect(MONGO_URI, {})
    .then(() => {
      console.log("Kết nối MongoDB thành công!");
    })
    .catch((err) => {
      console.log("Kết nối MongoDB thất bại");
      setTimeout(db_connect, 5000);
    });
module.exports = { dbconnect };
