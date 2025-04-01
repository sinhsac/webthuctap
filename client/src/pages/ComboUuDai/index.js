import { Card, Col, Pagination, Rate, Row } from "antd";
import { Checkbox } from "antd";
import Navbar from "../../components/Navbar";
import CartProduct from "../../components/CartProduct";
import "bootstrap/dist/css/bootstrap.min.css";

function ComboUuDai() {
  const onChange = () => {};
  return (
    <>
      <div className="container">
        <Row style={{ marginTop: "30px" }}>
          <Col span={4}>
            <Navbar />
          </Col>
          <Col span={20}>
          <Row>
            Combo Ưu Đãi
          </Row>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              <CartProduct />
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination defaultCurrent={1} total={50} onChange={onchange} />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default ComboUuDai;
