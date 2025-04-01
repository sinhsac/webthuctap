import { Flex, Layout, Breadcrumb } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;
function MainLayout() {
  return (
    <>
      <Content 
        style={{
          // padding: "0 100px",
          backgroundColor:"white",
        }}
      >
        {/* <Breadcrumb
          style={{
            padding: "20px 0px",
            backgroundColor:"gray",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Outlet />
      </Content>
    </>
  );
}
export default MainLayout;
