import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Screenshot_3 [Recovered] 1.png"

function Navbar() {


  return (
    <div className="navbarWrapper">
      <div className="navbar">
        <div className="navbarLeft">
        <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
        </div>
        <div className="navbarRight">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;