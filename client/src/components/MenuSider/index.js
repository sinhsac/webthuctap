import {
  DashboardOutlined,
  UserOutlined,
  AlignLeftOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./MenuSider.scss"

function MenuSider() {
  const items = [
    {
      key: "/admin",
      label: (
        <Link to="/admin" >
          Tổng quan
        </Link>
      ),
      icon: <DashboardOutlined />,
      className:"menu-link",
    },
    {
      key: "/info-company",
      label: (
        <Link to="/info-company" >
          Thông tin người dùng
        </Link>
      ),
      icon: <UserOutlined />,
      className:"menu-link",
    },
    {
      key: "/job-manage",
      label: (
        <Link to="/job-manage" >
          Thông tin sản phẩm
        </Link>
      ),
      icon: <AlignLeftOutlined />,
      className:"menu-link",
    },
    {
      key: "/cv-manage",
      label: (
        <Link to="/cv-manage" >
          Đơn hàng
        </Link>
      ),
      icon: <FileDoneOutlined />,
      className:"menu-link",
    },
  ];

  return (
    <>
      <Menu
        mode="inline" // sắp xếp theo chiều dọc
        items={items}
        defaultSelectedKeys={["/admin"]}
        defaultOpenKeys={["/admin"]}
      />
    </>
  );
}

export default MenuSider;
