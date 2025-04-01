import { Card, Image } from "antd";
import "./CartProduct.scss";
import productExample from "../../assets/images/productExample.jpg"
import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
const { Meta } = Card;
function CartProduct(props) {
  const {item}=props

  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
          position: "relative",
          alignContent: "center",
          padding: "0px",
        }}
        // bodyStyle={{ padding: 0 }}
        cover={
          <Image
            alt="hoa tuoi"
            src={item.image}
            style={{
              width: "240px",
              height: "240px",
              alignContent: "center",
              display: "flex",
              borderRadius: "5% 5% 0% 0%",
            }}
          />
        }
      >
        <div className="lable-hot">Khuyến Mãi</div>




        <div className="product">
          <div className="product__name">{item.name}</div>
          <div className="product__price">
            <div className="product__price__new-price">{item.price}</div>
            <div className="product__price__old-price">{item.countInStock}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
export default CartProduct;
