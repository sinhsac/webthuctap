import {
  DashboardOutlined,
  MailOutlined,
  AlignLeftOutlined,
  UserOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
function MenuSider() {
  const items = [
    {
      key: "/admin",
      label: <Link to="/admin">Tổng quan</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: "/info-company",
      label: <Link to="/info-company">Người dùng</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "/job-manage",
      label: <Link to="/job-manage">Sản phẩm</Link>,
      icon: <AlignLeftOutlined />,
    },
    {
      key: "/cv-manage",
      label: <Link to="/cv-manage">Đơn hàng</Link>,
      icon: <FileDoneOutlined />,
    },
   
  ];
  return (
    <>
      <Menu
        mode="inline" // sắp xếp theo chiều dọc
        items={items}
        // mặc định item điền vào key
        defaultSelectedKeys={["/admin"]}
        defaultOpenKeys={["/admin"]}
      />
    </>
  );
}
export default MenuSider;
