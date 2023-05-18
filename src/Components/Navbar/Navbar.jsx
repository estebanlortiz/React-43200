import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  return(
      <header>
          <Link to={"/"}>
              <h1> ByR </h1>
          </Link>
          <ul>
              <li>
                  <NavLink to={`/categoria/capilar`}>Belleza Capilar</NavLink>
              </li>

              <li>
                  <NavLink to={`/categoria/facial`} >Belleza Facial</NavLink>
              </li>

              <li>
                  <NavLink to={`/categoria/corporal`} >Belleza Corporal</NavLink>
              </li>

          </ul>
          <CartWidget />
      </header>
  )
}

export default NavBar
