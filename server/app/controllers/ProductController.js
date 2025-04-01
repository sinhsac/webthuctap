const ProductModel = require("../models/ProductModel");

// hiển thị tất cả sản phẩm
const getAll = (req, res, next) => {
    ProductModel.find({})
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).json("loi server");
      });
}

// tìm sản phẩm theo ID
const findProduct = (req, res, next) => {
    var _id = req.params.id
    ProductModel.findById({ _id })
      .then((data) => {
        if (data) {
          res.json(data);
        }
      })
      .catch((err) => {
        res.status(500).json("sản phẩm undfined");
      });
}

// tạo sản phẩm
const createProduct =  (req, res, next) => {
    const { name, image, type ,price ,countInStock, rating,description} = req.body;
    console.log( name, image, type ,price ,countInStock, rating,description)
    if (!name || !image || !type || !price || !countInStock ||!rating || !description ) {
      return res.json("input đầu vào thiếu trường bắt buộc");
    }
    ProductModel.findOne({
      name: name,
    })
      .then((data) => {
        if (data) {
          res.json("Tên sản phẩm này đã tồn tại");
        } else {
          return ProductModel.create({
            name: name,
            image: image,
            type: type,
            price: price,
            countInStock: countInStock,
            rating: rating,
            description: description,
          });
        }
      })
      .then((data) => {
        if (data) {
          res.json("Them moi san pham thanh cong");
        }
      })
      .catch((err) => {
        res.status(500).json("Loi server");
        console.log(err);
      });
}

const updateProduct =(req,res,next)=>{
     var _id = req.params.id;
     var name = req.body.name;
     var image = req.body.image;
     var type = req.body.type;
     var price = req.body.price;
     var countInStock = req.body.countInStock;
     var rating = req.body.rating;
     var description = req.body.description;
     ProductModel.findByIdAndUpdate(_id, {
       name: name,
       image: image,
       type: type,
       price: price,
       countInStock: countInStock,
       rating: rating,
       description: description,
     })
       .then((data) => {
         if (data) {
           res.json("Update thanh cong nhe");
         } else {
           res.json("Update that bai");
         }
       })
       .catch((err) => {
         res.status(500).json("Loi server");
       });
}

// xóa sản phấm
const deleteProduct = (req, res, next) => {
  var id = req.params.id;
  ProductModel.deleteOne({
    _id: id,
  })
    .then((data) => {
      if (data) {
        res.json("Xoa thanh cong");
      } else {
        res.json("Xoa that bai");
      }
    })
    .catch((err) => {
      res.status(500).json("loiserver");
    });
};

// phân trang sản phẩm
const page_size = 4;
var phanTrangSanPham = (req, res, next) => {
    var page = req.query.page; // chứa tất cả tham số được truyền qua url sau dấu ?
    var sort = req.query.sort;
    if (page) {
      // get page
      page = parseInt(page);
      if (page < 1) page = 1;
      var soluongphantuboqua = (page - 1) * page_size;
      // sort theo giá trị truyền vào 
      const objectSort={};
      objectSort[sort[1]] = sort[0] // truyền 2 giá trị trên url vào 1 là asc hoặc desc 2 là giá trị cần sắp xếp
      // console.log('objectsort',objectSort);
      ProductModel.find({})
        .skip(soluongphantuboqua)
        .limit(page_size) // số lượng doccutmet trả về trong moi trang
        .sort(
          // name:sort
          objectSort
        )
        .then((data) => {
          ProductModel.countDocuments({}).then((total) => {
            var tongsopage = Math.ceil(total / page_size); // ceil làm tròn lên
            res.json(data);
          });
        })
        .catch((err) => {
          res.status(500).json("loi server");
        });
    }
    else {
      // get trang 1
       page = 1;
        var soluongphantuboqua = (page - 1) * page_size;
        ProductModel.find({})
            .skip(soluongphantuboqua)
            .limit(page_size)
            .then(data => {
                ProductModel.countDocuments({}).then((total) => {
                     var tongsopage = Math.ceil(total / page_size); // ceil làm tròn lên 
                    res.json(data)
                })
                
            })
            .catch(err => {
                res.status(500).json("loi server nhes");
        })
    }

}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAll,
  findProduct,
  phanTrangSanPham,
};