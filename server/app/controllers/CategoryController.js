const CategoryModel = require("../models/CategoryModel");

// Lấy tất cả danh mục
const getAllCategories = async (req, res, next) => {
    try {
        const categories = await CategoryModel.find({});
        res.json(categories);
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Tìm danh mục theo ID
const getCategoryById = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await CategoryModel.findById(categoryId);

        if (category) {
            res.json(category);
        } else {
            res.status(404).json("Không tìm thấy danh mục");
        }
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Tạo danh mục mới
const createCategory = async (req, res, next) => {
    try {
        const { name, description, image } = req.body;

        if (!name || !description) {
            return res.json("Input đầu vào thiếu trường bắt buộc");
        }

        const existingCategory = await CategoryModel.findOne({ name });

        if (existingCategory) {
            return res.json("Tên danh mục đã tồn tại");
        }

        const newCategory = await CategoryModel.create({
            name,
            description,
            image
        });

        res.json("Thêm mới danh mục thành công");
    } catch (err) {
        res.status(500).json("Lỗi server: " + err.message);
    }
};

// Cập nhật danh mục
const updateCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const { name, description, image } = req.body;

        const updatedCategory = await CategoryModel.findByIdAndUpdate(
            categoryId,
            { name, description, image },
            { new: true }
        );

        if (updatedCategory) {
            res.json("Cập nhật danh mục thành công");
        } else {
            res.json("Cập nhật danh mục thất bại");
        }
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

// Xóa danh mục
const deleteCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const result = await CategoryModel.deleteOne({ _id: categoryId });

        if (result.deletedCount > 0) {
            res.json("Xóa danh mục thành công");
        } else {
            res.json("Xóa danh mục thất bại");
        }
    } catch (err) {
        res.status(500).json("Lỗi server");
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};