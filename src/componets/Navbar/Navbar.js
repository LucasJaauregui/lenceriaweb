import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <img src="https://res.cloudinary.com/drgvqeadn/image/upload/v1680489033/android-chrome-192x192_mrhw8h.png"alt="Logo Lacie Lengerie"/>
      <nav className="navbar">
        <ul>
          <li>Lenceria</li>
          <li>Bikinis</li>
          <li>Accesorios</li>
          <li>Todos</li>
        </ul>
      </nav>
      
      <Link to={"/cart"}> <CartWidget /> </Link>
    </div>
  );
};

export default Navbar;
