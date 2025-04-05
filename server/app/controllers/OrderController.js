const OrderModel = require("../models/OrderProduct");
const UserModel = require("../models/UserModel");

// Get all orders
const getAllOrders = async (req, res, next) => {
    try {
        const orders = await OrderModel.find({})
            .populate("user", "name email")
            .populate("orderItems.product");
        res.json(orders);
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Get order by ID
const getOrderById = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const order = await OrderModel.findById(orderId)
            .populate("user", "name email")
            .populate("orderItems.product");

        if (order) {
            res.json(order);
        } else {
            res.status(404).json("Không tìm thấy đơn hàng");
        }
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Create new order
const createOrder = async (req, res, next) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json("Không có sản phẩm trong đơn hàng");
        }

        const userId = req.user._id;
        const newOrder = await OrderModel.create({
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
            user: userId
        });

        res.status(201).json({
            status: "OKE",
            message: "Tạo đơn hàng thành công",
            order: newOrder
        });
    } catch (err) {
        res.status(500).json("Lỗi server: " + err.message);
    }
};

// Get user orders
const getMyOrders = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const orders = await OrderModel.find({ user: userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Update order to paid
const updateOrderToPaid = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const { paymentResult } = req.body;

        const order = await OrderModel.findById(orderId);

        if (!order) {
            return res.status(404).json("Không tìm thấy đơn hàng");
        }

        order.isPaid = true;
        order.paidAt = Date.now();
        // You can add more payment details if needed
        // order.paymentResult = paymentResult;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Update order to delivered
const updateOrderToDelivered = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const order = await OrderModel.findById(orderId);

        if (!order) {
            return res.status(404).json("Không tìm thấy đơn hàng");
        }

        order.isDelivered = true;
        order.deliverdAt = Date.now();

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Delete order
const deleteOrder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const result = await OrderModel.deleteOne({ _id: orderId });

        if (result.deletedCount > 0) {
            res.json("Xóa đơn hàng thành công");
        } else {
            res.status(404).json("Không tìm thấy đơn hàng để xóa");
        }
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    getMyOrders,
    updateOrderToPaid,
    updateOrderToDelivered,
    deleteOrder
};