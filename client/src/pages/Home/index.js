import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"
import banner3 from "../../assets/images/banner3.jpg"
import anhvideo from "../../assets/images/anhvideo.jpg"
import CartProduct from "../../components/CartProduct";
import { Button, Col, Row } from "antd";
import "./Home.scss"
import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {

  const [dataListProduct, setDataListProduct] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getProductList();
      if (response) {
        setDataListProduct(response);
      }
    };
    fetchAPI();
  }, []);
  console.log(dataListProduct)

  return (
    <>


      <div style={{ backgroundImage: 'url("https://dogolegia.vn/wp-content/uploads/2022/09/BG1.jpg")', backgroundSize: 'cover', padding: "60px 180px", backgroundPosition: 'center', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Row gutter={16} align="middle">
          {/* Left Column: Carousel */}
          <Col xs={24} md={12}>
            <Carousel data-bs-theme="dark" style={{ marginBottom: "20px" }}>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009586453869_7119fdedafe33125ff17704078751d1b-1024x824.jpg" alt="banner1" width="100%" height="300px" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009585425550_12cfb95b4519349819b73da1d145d607.jpg" alt="banner2" width="100%" height="300px" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://dogolegia.vn/wp-content/uploads/2023/01/z4009582924845_8cf5c06ff00da87805959b1149ab66f0.jpg" alt="banner2" width="100%" height="300px" />

              </Carousel.Item>
            </Carousel>
          </Col>

          {/* Right Column: Text and Buttons */}
          <Col xs={24} md={12} style={{ padding: '20px', textAlign: 'left' }}>
            <h3
              style={{
                color: '#d35400',
                fontWeight: 'bold',
                fontSize: '24px',
                marginBottom: '10px',
              }}
            >
              NHÀ LÀ KHỞI NGUỒN CỦA MỌI ĐIỀU HANH PHÚC
            </h3>
            <p style={{ color: '#333', fontSize: '16px', marginBottom: '20px' }}>
              Để mỗi ngày đều sống động và đầy đủ trong tâm hồn. Vì chúng ta hiểu rõ, mỗi dịch vụ của chúng ta không chỉ để giúp bạn thành người phục hồi!
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button
                style={{
                  borderRadius: '20px',
                  borderColor: '#333',
                  color: '#333',
                }}
              >
                Số điện (?)
              </Button>
              <Button
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#8B4513',
                  border: 'none',
                  color: '#fff',
                }}
              >
                ĐĂNG KÝ TƯ VẤN
              </Button>
            </div>
          </Col>
        </Row>
      </div>








      <div className="container" style={{ marginBottom: "20px", marginTop: "50px" }}>
        <div >

          <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaRegBookmark />
            <span style={{ color: "#B87029" }}>KỆ TIVI PHÒNG KHÁCH</span>
          </h1>
          <hr style={{ color: "#E88697" }} />
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {dataListProduct && (
            <>
              {dataListProduct.map((item) => (
                <Link to={`/chitiet/${item._id}`} style={{ textDecoration: "none" }}>
                  <CartProduct
                    item={{
                      ...item,
                      price: new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price),
                      countInStock: new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.countInStock), // Định dạng countInStock
                    }}
                    key={item._id}
                  />


                </Link>

              ))}
            </>
          )}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px",
          }}
        >
          <button className="viewmore" size="large">
            Xem thêm
          </button>
        </div>
        <Row style={{ height: "450px" }}>
          <Col span={16}>
            <iframe width="700px" height="80%" src="https://www.youtube.com/embed/DHLm2_-crjw?si=SFhliG2waBx6X9to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
          <Col span={8}>
            <img src="https://noithattrongsang.com/images/san_pham/ghe-_14.jpg" alt="anhvideo" width="100%" height="80%" />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Home;