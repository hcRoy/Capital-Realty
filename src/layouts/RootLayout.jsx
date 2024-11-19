import { Button, Col, Drawer, Input, Layout, Menu, Row } from "antd";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo.svg";
import Logo3 from "../assets/images/logo-transperant.svg";
import { followUs, menuItems, quickLinks } from "../helpers/menuItems";
import { FiMail, FiPhone, FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMenuClick = (id) => {
    const target = document.getElementById(id);
    const headerHeight = 100;

    if (target) {
      const elementPosition = target.offsetTop; // Get position of the target div
      const offsetPosition = elementPosition - headerHeight; // Subtract header height

      // Smooth scroll to the position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Layout>
      <Header className="header-container">
        <div className="box-container">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              items={menuItems}
              className="header-menu"
              onClick={(value) => {
                // const element = document.getElementById(value.key);
                // element.scrollIntoView({
                //   behavior: "smooth",
                //   block: "start",
                //   inline: "nearest",
                // });
                handleMenuClick(value.key);
              }}
            />
            <Input
              placeholder="search"
              addonBefore={<FiSearch className="search-icon" />}
            />
            <Button
              className="header-menu-drawer-btn"
              onClick={() => setIsDrawerOpen(true)}
            >
              <BiMenu className="header-menu-drawer-icon" />
            </Button>
          </div>
        </div>
      </Header>
      <Content>
        <Outlet />
        <div>{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
        className="footer-container"
      >
        <div className="d-flex flex-column text-left">
          <Row gutter={30} className="footer-primary-container">
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="logo-container text-center">
                <img src={Logo2} alt="logo" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className="d-flex gap-1 flex-column">
                <div className="d-flex text-center gap-1">
                  <div className="secondary-logo-container">
                    <img src={Logo3} alt="logo" />
                  </div>
                  <span className="d-flex flex-column justify-content-center align-items-center footer-primary-content">
                    Capital Reality
                  </span>
                </div>
                <p className="footer-secondary-description">
                  Opp. New L.P. Savani School, Palanpur, Surat, Gujarat, 395009
                </p>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex gap-1 align-items-center footer-secondary-description">
                    <FiPhone />
                    <span>+91 81419 77877, +91 99046 57977</span>
                  </div>
                  <div className="d-flex gap-1 align-items-center footer-secondary-description">
                    <FiMail />
                    <span>inquiry@capitalrealty.info</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <div className="d-flex flex-column gap-2">
                <span className="footer-link-primary-label">Quick Links</span>
                <div className="d-flex flex-column gap-1">
                  {quickLinks?.map((link, index) => (
                    <span className="" key={index}>
                      {link?.label}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5}>
              <div className="d-flex flex-column gap-2">
                <span className="footer-link-primary-label">Follow Us on</span>
                <div className="d-flex gap-2 align-items-center">
                  {followUs?.map((link, index) => (
                    <span className="follow-us-icons" key={index}>
                      {link?.icon()}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="footer-secondary-container">
            <Col xs={12} md={12} className="text-center">
              © Capital Reality – All rights reserved
            </Col>
            <Col xs={4} md={4}>
              Terms and Conditions
            </Col>
            <Col xs={4} md={4}>
              Privacy Policy
            </Col>
            <Col xs={4} md={4}>
              Disclaimer
            </Col>
          </Row>
        </div>
      </Footer>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="left"
        className="header-menu-drawer"
        width={220}
      >
        <Menu mode="vertical" className="drawer-header-menu">
          {menuItems?.map((data) => (
            <Menu.Item
              key={data?.key}
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {data?.label}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Layout>
  );
};
export default RootLayout;
