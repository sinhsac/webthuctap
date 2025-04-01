import { Link, NavLink } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "./MenuHeader.scss";
import { IoMdHome } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import { FaSalesforce } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BiChair } from "react-icons/bi";

function MenuHeader() {
  const navLinkActive = (e) => {
    return e.isActive ? "menu__link menu__link--active" : "menu__link";
  };
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" className={navLinkActive} >
              <div>
                <IoMdHome size={20}/>
              </div>
              <div>
                Trang chủ
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/combouudai" className={navLinkActive}>
            <div>
                <FaSalesforce  size={20}/>
              </div>
              <div>
              Com bo ưu đãi
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/phongngu" className={navLinkActive}>
            <div>
                <BiBed  size={20}/>
              </div>
              <div>
              Nội thất phòng ngủ
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/phongkhach" className={navLinkActive}>
            <div>
                <BiChair  Home size={20}/>
              </div>
              <div>
              Nội thất phòng khách
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gioithieu" className={navLinkActive}>
            <div>
                <FiFileText  size={20}/>
              </div>
              <div>
              Giới thiệu
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lienhe" className={navLinkActive}>
            <div>
                <IoMdMail size={20}/>
              </div>
              <div>
              Liên hệ
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default MenuHeader;
// const items = ["Trang chủ", "Máy tính", "Điện thoại"].map((key) => ({
//   key,
//   label: `${key}`,
// }));
// return (
//   <>
//     <Menu
//       className="header__menu"
//       theme="light"
//       mode="horizontal"
//       items={items}
//       defaultSelectedKeys={["2"]}
//     />
//   </>
// );