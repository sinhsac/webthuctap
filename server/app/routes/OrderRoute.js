const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");
const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken } = require("../middleware/verifytoken");

// Routes that require admin authorization
router.get("/all", authMiddleWare, orderController.getAllOrders);
router.put("/deliver/:id", authMiddleWare, orderController.updateOrderToDelivered);
router.delete("/delete/:id", authMiddleWare, orderController.deleteOrder);

// Routes that require user authorization
router.post("/create", verifyToken, orderController.createOrder);
router.get("/my-orders", verifyToken, orderController.getMyOrders);
router.get("/:id", verifyToken, orderController.getOrderById);
router.put("/pay/:id", verifyToken, orderController.updateOrderToPaid);

module.exports = router;