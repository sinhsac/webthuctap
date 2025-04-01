import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../../services/productService";
import { Col, Image, Rate, Row } from "antd";
import "./ProductDetail.scss"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function ChiTietSP() {
  const [product, setProduct] = useState()
  const param = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailProduct(param.id)
      setProduct(response)
    }
    fetchApi()
  }, [])

  console.log(product)

  const inputRef = useRef();
  const handleAddToCart = () => {

  };

  return (
    <>
      {product && (
        <div className="container">
          <Row style={{ padding: "16px" }}>
            <Col span={12}>
              <Image
                src={product.image}
                alt="image product"
                preview={false}
                style={{
                  width: "100%",
                  maxWidth: "565px",
                  maxHeight: "565px",
                  height: "100%",
                }}
              />
              <Row style={{ paddingTop: "14px" }}>
                <Col span={4}>
                  <Image
                    src={product.image}
                    alt="image product"
                    preview={false}
                    className="productDetail__ImageSmall"
                  />
                </Col>
                <Col span={4}>
                  <Image
                    src={product.image}
                    alt="image product"
                    preview={false}
                    className="productDetail__ImageSmall"
                  />
                </Col>
                <Col span={4}>
                  <Image
                    src={product.image}
                    alt="image product"
                    preview={false}
                    className="productDetail__ImageSmall"
                  />
                </Col>
                <Col span={4}>
                  <Image
                    src={product.image}
                    alt="image product"
                    preview={false}
                    className="productDetail__ImageSmall"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <div className="productDetail">
                <div className="productDetail__name">{product.name}</div>
                <Rate className="productDetail__star" /> đánh giá
                <div className="productDetail__price">
                  <div className="productDetail__price-new">{product.price}đ</div>
                  <div> &nbsp; Giá thị trường:</div>
                  <div className="productDetail__price-old">{product.countInStock}đ</div>
                </div>
                <div className="productDetail__content3">
                  <strong>Tiết kiệm:</strong>
                  <span> 105,000đ</span>
                </div>
                <div>
                  <strong>Tình trạng:</strong>
                  <span> Còn hàng</span>
                </div>
                <div className="productDetail__quantity">
                  <strong>Số lượng:</strong>
                  <div className="productDetail__quantity--right">
                    <button className="no-border-button">
                      <MinusOutlined />
                    </button>
                    <input
                      ref={inputRef}
                      defaultValue={1}
                      className="no-border-input"
                    />
                    <button className="no-border-button">
                      <PlusOutlined />
                    </button>
                  </div>
                </div>
                <div className="productDetail__content4">
                  <button
                    className="productDetail__addcart"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="productDetail__buynow">Mua ngay</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}

    </>
  )
}

export default ChiTietSP