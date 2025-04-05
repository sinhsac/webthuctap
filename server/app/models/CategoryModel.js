const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        // Có thể thêm trường cho hình ảnh danh mục nếu cần
        image: {
            type: String
        }
    },
    {
        collection: "Category",
        timestamps: true
    }
);

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;