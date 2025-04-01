import { Flex, Layout, Breadcrumb } from "antd";
import { Link, Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import Footerlayout from "./Footerlayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentData } from "../../services/userService";
import {setCurrentData} from "../../actions/currentData";
const { Header, Footer, Content } = Layout;
function LayoutDefault() {
  const isLogin = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
      // const currentDataSave = useSelector((state) => state.currentDataReducer);
      // console.log("currentDataSave", currentDataSave.currentData.data);
  useEffect(()=>{
    const fetchData = async()=>{
        const token = localStorage.getItem("access_token");
        const response = await getCurrentData(token);
        if(response){
          dispatch(setCurrentData(response.message));
        }
    }
        fetchData();
    
  },[isLogin])
  return (
    <>
      <Layout >
        <HeaderLayout  />
        <MainLayout />
        <Footerlayout/>
      </Layout>
    </>
  );
}
export default LayoutDefault;
