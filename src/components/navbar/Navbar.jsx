import "./navbar.css";
import logo from "../../components/navbar/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logoContainer">
        <div class="childLogoContainer">
          <div className="logoImage">
            <img src={logo} alt="Logo" />
          </div>
          <div className="logo">Trivago</div>
          </div>
        </div>
        <div className="navItems">
          <button className="navButton">Hotel Search</button>
          <button className="navButton">Room Search</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
