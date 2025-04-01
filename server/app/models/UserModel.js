const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique:true
    },
    password: {
      type: String,
      require: true,
    }, 
    isAdmin: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    access_token: {
      type: String,
      require: true,
    },
    refresh_token: {
      type: String,
      require: true,
    },
  },
  {
    collection: "User",
    timestamps:true // thời gian tạo và update
  }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
