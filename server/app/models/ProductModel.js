const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      require: true,
    },
    type: {
      //loại của sản phẩm
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    countInStock: {
      // số lượng tồn kho
      type: Number,
      require: true,
    },
    rating: {
      // số sao sản phẩm
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    collection: "Product",
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
