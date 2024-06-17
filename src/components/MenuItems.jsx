import { Menu } from "antd";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "cryptocurrencies",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "exchanges",
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "news",
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const MenuItems = () => {
  return <Menu theme="dark" items={items}></Menu>;
};

export default MenuItems;
