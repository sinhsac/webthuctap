import { Col, Image, Rate, Row } from "antd";
import product1 from "../../assets/images/product1.jpg";
import product1of1 from "../../assets/images/product1-1.jpg";
import product2of1 from "../../assets/images/product1-2.jpg";
import product3of1 from "../../assets/images/product1-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetail.scss"
import { useRef } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";


function ProductDetail() {
    const inputRef = useRef();
       const handleAddToCart = () => {
        
       };

  return (
    <>
      <div className="container">
        <Row style={{ padding: "16px" }}>
          <Col span={12}>
            <Image
              src={product1}
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
                  src={product1}
                  alt="image product"
                  preview={false}
                  className="productDetail__ImageSmall"
                />
              </Col>
              <Col span={4}>
                <Image
                  src={product1of1}
                  alt="image product"
                  preview={false}
                  className="productDetail__ImageSmall"
                />
              </Col>
              <Col span={4}>
                <Image
                  src={product2of1}
                  alt="image product"
                  preview={false}
                  className="productDetail__ImageSmall"
                />
              </Col>
              <Col span={4}>
                <Image
                  src={product3of1}
                  alt="image product"
                  preview={false}
                  className="productDetail__ImageSmall"
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <div className="productDetail">
              <div className="productDetail__name">Giỏ hoa fall in love</div>
              <Rate className="productDetail__star" /> 0 đánh giá
              <div className="productDetail__price">
                <div className="productDetail__price-new">499,000đ</div>
                <div> &nbsp; Giá thị trường:</div>
                <div className="productDetail__price-old">604,000đ</div>
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
    </>
  );
}
export default ProductDetail;
