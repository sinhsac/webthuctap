import React from 'react';
import logo2 from "../../assets/images/logo2.png";
import { Layout, Row, Col, Typography, Divider, Space } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const Footerlayout = () => {
  return (
    <Footer style={{ background: '#f5f5f5', padding: '40px 50px' }}>
      <Row gutter={[16, 16]}>
        {/* Left Section: Logo and Company Info */}
        <Col xs={24} sm={12} md={8}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <img
              src={logo2}
              alt="Logo"
              style={{ width: '50px', marginRight: '10px' }}
            />
            <Title level={4} style={{ margin: 0, color: '#B87209' }}>
              NỘI THẤT ĐIỆP NGỌC
            </Title>
          </div>
          <Text strong>
            CỬA HÀNG NỘI THẤT NGỌC ĐIỆP
          </Text>
          <br />
          <Text>
            Địa chỉ: 21 Nguyễn Chí Thanh, P. Hàm Rồng, TP Thanh Hoá
          </Text>
          <br />
          <Text>
            Hotline: 0369645220
          </Text>
          <br />
          <Text>
            Giờ làm việc: Từ 8h00 - 20h00 các ngày trong tuần
          </Text>
          <br />
          <Text>
            Website:{' '}
            <Link href="https://noithatngocdiep.com" target="_blank">
              noithatdiepngoc.com
            </Link>
          </Text>
          <br />
          <Text>
            Email:{' '}
            <Link href="mailto:contact@noithatngocdiep.com">
              contact@noithatdiepngoc.com
            </Link>
          </Text>
        </Col>

        {/* Middle Section: Customer Support Links */}
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>HỖ TRỢ KHÁCH HÀNG</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="#">Chính Sách Đổi Trả Hàng</Link>
            </li>
            <li>
              <Link href="#">Hướng Dẫn Mua Hàng</Link>
            </li>
            <li>
              <Link href="#">Chính Sách Vận Chuyển</Link>
            </li>
            <li>
              <Link href="#">Chính Sách Bảo Hành</Link>
            </li>
          </ul>
        </Col>

        {/* Right Section: Social Media and Description */}
        <Col xs={24} sm={12} md={8}>
          <Text>
            Kết nối với chúng tôi trên các mạng xã hội để cập nhật những
            thông tin mới nhất về sản phẩm và các ưu đãi hấp dẫn.
          </Text>
          <Space size="large" style={{ marginTop: '16px' }}>
            <Link href="#" target="_blank">
              <FacebookFilled style={{ fontSize: '24px', color: '#3b5998' }} />
            </Link>
            <Link href="#" target="_blank">
              <InstagramFilled style={{ fontSize: '24px', color: '#e1306c' }} />
            </Link>
            <Link href="#" target="_blank">
              <TwitterCircleFilled style={{ fontSize: '24px', color: '#1da1f2' }} />
            </Link>
            <Link href="#" target="_blank">
              <YoutubeFilled style={{ fontSize: '24px', color: '#ff0000' }} />
            </Link>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Text style={{ textAlign: 'center', display: 'block' }}>
        © 2025 NỘI THẤT ĐIỆP NGỌC. All Rights Reserved.
      </Text>
    </Footer>
  );
};

export default Footerlayout;
