const express = require("express");
var router = express.Router();
var productcontrollers = require("../controllers/ProductController");
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', productcontrollers.createProduct);
router.put('/update/:id', productcontrollers.updateProduct);
router.get("/all",productcontrollers.getAll);
router.delete("/delete/:id",productcontrollers.deleteProduct);
router.get("/", productcontrollers.phanTrangSanPham);
router.get("/:id", productcontrollers.findProduct);

module.exports = router;
