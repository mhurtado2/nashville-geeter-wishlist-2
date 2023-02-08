import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";



export const NavBar = () => {
    const navigate = useNavigate()
  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        <img
          className="logo__img"
          src="https://i.pinimg.com/originals/bd/ca/5f/bdca5f4affdf2bfb5a33c637d3029bb5.gif"
          alt="Nashville Geeter Wishlist Logo"
        />
      </Link>
      <li className="navbar__item">
        <Link className="navbar__link" to="/guitars">
          Guitars
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/pedals">
          Pedals
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/amps">
          Amps
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/accessories">
          Accessories
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/new">
          New Gear
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/please">
          Complaints
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/blog">
          Blog
        </Link>
      </li>

      {localStorage.getItem("wishlist_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to=""
            onClick={() => {
              localStorage.removeItem("wishlist_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};


//https://t4.ftcdn.net/jpg/01/21/83/11/360_F_121831102_PQTMDLhAaX8Hq9aMasoH505g9lNYW5Xm.jpg
//geeter logo