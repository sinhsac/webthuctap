const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1/ShopDoNoiThat";
// const MONGO_URI = "mongodb://localhost:27017/ShopDoNoiThat";
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
