import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  FolderFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Design team",
            icon: <AppstoreOutlined />,
            key: "/design team",
          },
          {
            label: "Marketting team",
            key: "/Marketting",
            icon: <ShopOutlined />,
          },
          {
            label: "Development team",
            key: "/deleopement",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Products",
            key: "/product",
            icon: <FolderFilled />,
          },

          {
            label: "Sales",
            key: "/sales",
            icon: <FolderFilled />,
          },
          {
            label: "Design",
            key: "/Design",
            icon: <FolderFilled />,
          },
          {
            label: "office",
            key: "/office",
            icon: <FolderFilled />,
          },
          {
            label: "Legal",
            key: "/legal",
            icon: <FolderFilled />,
          },
          {
            label: "Invite teammates",
            key: "/invite",
            icon: <UserOutlined />,
          },
          {
            label: "Help and first steps",
            key: "/help",
            icon: <UserOutlined />,
          },
          {
            label: "Add biling",
            key: "/biling",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
