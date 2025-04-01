import { BackTop, Badge, Button, Col, Dropdown, Input, Layout, Row } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./HeaderLayout.scss";
import MenuHeader from "../../components/MenuHeader";
import ButtonInputSearch from "../../components/ButtonInputSearch";
import logo2 from "../../assets/images/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const { Search } = Input;
const { Header, Footer, Content } = Layout;

const onSearch = (value, _e, info) => console.log(info?.source, value);

function HeaderLayout() {
  const currentData = useSelector((state) => state.currentDataReducer);
  const token = localStorage.getItem("access_token");

  const items = [
    {
      key: '1',
      label: (
        <Link to="/admin" style={{ color: "black", textDecoration: "none" }} className="fontchu">
          Trang quản lý 
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/logout" style={{ color: "black", textDecoration: "none" }} className="fontchu">
          Đăng xuất
        </Link>
      ),
    }
  ];

  const itemsisLogin = [
    {
      key: "1",
      label: (
        <Link to="/login" style={{ color: "black", textDecoration: "none" }} className="fontchu">
          Đăng nhập
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/register" style={{ color: "black", textDecoration: "none" }} className="fontchu">
          Đăng ký
        </Link>
      ),
    },
  ];

  return (
    <header
      className="header"
      style={{
        borderBottom: "1px solid #d4d4d4",
        position: "sticky",
        top: 0,
        zIndex: "+999",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Logo */}
        <div style={{ flexShrink: 0 }}>
           <img
            src={logo2}
            alt="logo2"
            style={{ width: "auto", height: "100px" }} // Reduced height for better alignment
          /> 
       
        </div>

        {/* Menu */}
        <div style={{ flex: 1, margin: '0 20px' }}>
          <MenuHeader />
        </div>

        {/* Right content */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
           
            {token && token.length !== 0 ? (
              <Dropdown menu={{ items }} arrow placement="bottomRight">
                <div className="fontchu" style={{ cursor: 'pointer' }}>
                  {currentData.currentData.data && (
                    <>{currentData.currentData.data.name}</>
                  )}
                  <CaretDownOutlined />
                </div>
              </Dropdown>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                  className="fontchu"
                >
                  Đăng nhập
                </Link>
                <span className="fontchu">/</span>
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none" }}
                  className="fontchu"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center',    }}>
            <Badge count={5}>
              <ShoppingCartOutlined
                style={{
                  fontSize: "30px",
                  color: "#363f4d",
                  marginRight: "5px",
               
                 
  
                }}
              />
            </Badge>
            <span className="fontchu">Giỏ hàng</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;