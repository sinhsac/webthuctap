const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    orderItems: [
      {
        name: { type: String, require: true },
        amount: { type: Number, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          require: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, require: true },
      address: { type: String, require: true },
      city: { type: String, require: true },
      country: { type: String, require: true },
      phone: { type: String, require: true },
    },
    paymentMethod: { type: String, require: true }, // phương thức thanh toán
    itemsPrice: { type: Number, require: true }, // giá sản phẩm
    shippingPrice: { type: Number, require: true }, // phí giao hàng
    taxPrice: { type: Number, require: true }, // giá thuế
    totalPrice: { type: Number, require: true }, // tổng giá
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false }, // đã thanh toán hay chưa
    paidAt: { type: Date }, // thanh toán vào lúc nào
    isDelivered: { type: Boolean, default: false }, //
    deliverdAt: { type: Date },
  },
  {
    collection: "Order",
  }
);

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
