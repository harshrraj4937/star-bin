// ProductPage.js
import React from "react";
import { Layout, Button, Rate, Breadcrumb, Card, Row, Col } from "antd";
import {
  InfoCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./ProductPage.css";

const {Content } = Layout;

const ProductPage = () => {
  return (
    <Layout>
    
      <Content className="content">
        <h1 className="title">Royal Enfield Hunter 350</h1>
        <div className="ratings-section">
          <Rate disabled defaultValue={5} className="ratings" />
          <span className="ratings-count">1933 Ratings</span>
          <a href='/' className="write-review">
            Write Review
            {/* only customers who have used the product before can write the review by paymment previous rides or some foreign key relation perhaps? */}
          </a>
        </div>
        <Breadcrumb separator="|" className="breadcrumb">
          {["OVERVIEW", "ASK AI", "SIMILAR STREET BIKES", "MILEAGE"].map((item) => (
            <Breadcrumb.Item key={item}>
              <a href='/' className="breadcrumb-link">
                {item}
              </a>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <Row gutter={16}>
          <Col lg={16}>
            <img
              src="https://placehold.co/900x500?text=ThunderBird%0A350X&font=roboto"
              alt="Royal Enfield Hunter 350"
              className="main-image"
            />
            {/* <div className="image-options">
              <Button icon={<DollarCircleOutlined />} type="text">
                Colours
              </Button>
              <Button icon={<InfoCircleOutlined />} type="text">
                Images
              </Button>
              <Button icon={<CalculatorOutlined />} type="text">
                Videos
              </Button>
              <Button icon={<StarOutlined />} type="text">
                360° View
              </Button>
            </div> */}
          </Col>
          <Col lg={8}>
            <Card className="price-card">
              <div className="price-option">
                <span>Variant</span>
                <a href='/' className="option-link">
                  Retro Factory <RightOutlined />
                </a>
              </div>
              <div className="price-option">
                <span>City</span>
                <a href='/' className="option-link">
                  Hadapsar, Pune <RightOutlined />
                </a>
              </div>
              <div className="price-details">
                <span className="price">₹ 1,81,763</span>
                <a href='/' className="detailed-price-link">
                  View Detailed Price
                </a>
                <p className="on-road-price">
                  Per day Price, Pune <InfoCircleOutlined />
                </p>
              </div>
              <div className="emi-details">
                <p className="emi-text">
                  EMI Rs. 6,235/month <InfoCircleOutlined />
                </p>
                <a href='/' className="emi-calculator-link">
                  EMI Calculator
                </a>
              </div>
              <Button type="primary" block className="emi-button">
                Book now
              </Button>
            </Card>
            <Button type="primary" danger block className="assistance-button">
              Get Monthly Rental Price
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductPage;
