import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        <img className="logo__img" src="https://t4.ftcdn.net/jpg/01/21/83/11/360_F_121831102_PQTMDLhAaX8Hq9aMasoH505g9lNYW5Xm.jpg" alt="Decoration Station Logo" />
      </Link>
      <li className="navbar__item">
        <Link className="navbar__link" to="/guitars">
          Guitars
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/pedal">
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
        <Link className="navbar__link" to="/logout">
          Log Out!
        </Link>
      </li>
    </ul>
  )
}

