import { Avatar, Button, Typography } from "antd";
import icon from "../images/cryptocurrency.png";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <MenuItems />
    </div>
  );
};

export default Navbar;
