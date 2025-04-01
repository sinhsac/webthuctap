import { Button, Checkbox, Form, Input, notification, Spin } from "antd";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { login } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/login";
import { useState } from "react";

function Login() {
  const [form] = Form.useForm();
  const [notifiapi, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [loadingApi, setLoadingApi] = useState(false);
  
  const handleSubmit = async (e) => {
      setLoadingApi(true);
      const response = await login(e);
      if(response.status==="OKE"){
         notifiapi.success({
           message: "success",
           description: `Bạn đã đăng nhập thành công`,
           duration: 3, // hiển thị trong bao lâu thời gian
         });
        localStorage.setItem("access_token", response?.access_token); //?. nếu đối tượng ko tồn tại ko xảy ra lỗi
        dispatch(checkLogin(true));
        navigate("/");
        form.resetFields();
            // fetchData();
      }
      else if (response.status === "ERRTK") {
        notifiapi.error({
          message: "error",
          description: `Email bạn nhập chưa tồn tại trong hệ thống`,
          duration: 3, // hiển thị trong bao lâu thời gian
        }); 
      }
          else {
            notifiapi.error({
          message: "error",
          description: `Mật khẩu không chính xác`,
          duration: 3, // hiển thị trong bao lâu thời gian
          });
          }
        setLoadingApi(false);
     
  };
  const rules = [
    {
      required: true, // yêu cầu người dùng phải nhập vào
      message: "Không được bỏ trống", // ko nhập show ra message
    },
  ];
  const navigate = useNavigate();
  const   handleNavigateRegiter=()=>{
    navigate('/register')
  }
  return (
    <>
      {contextHolder}
      <div style={{ marginTop: "30px" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "26px",
            lineHeight: "28px",
          }}
          className="textCenter"
        >
          TÀI KHOẢN
        </h3>
        <h4
          style={{ textAlign: "center", fontSize: "12px" }}
          className="textCenter"
        >
          Đăng nhập để mua hàng và sử dụng những tiện ích của chúng tôi
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form
            form={form}
            layout="vertical"
            name="form_login"
            onFinish={handleSubmit}
          >
            <Form.Item name="email" label="Email" rules={rules}>
              <Input size="large" style={{ width: "600px" }} />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={rules}>
              <Input.Password size="large" style={{ width: "600px" }} />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Lưu đăng nhập</Checkbox>
            </Form.Item>
            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" htmlType="submit" className="viewmore">
                {loadingApi===true ? <><Spin/></> : <>Đăng Nhập</>}
              </Button>
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#B87209",
              }}
            >
              Quên mật khẩu
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#000",
              }}
            >
              BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ
              <span
                onClick={handleNavigateRegiter}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#B87209",
                  cursor: "pointer",
                }}
              >
                &nbsp;TẠI ĐÂY.
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
export default Login;
