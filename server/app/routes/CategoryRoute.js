const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/CategoryController");
const { authMiddleWare } = require("../middleware/authMiddleware");

// Routes that require admin authorization
router.post("/create", authMiddleWare, categoryController.createCategory);
router.put("/update/:id", authMiddleWare, categoryController.updateCategory);
router.delete("/delete/:id", authMiddleWare, categoryController.deleteCategory);

// Public routes
router.get("/all", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

module.exports = router;