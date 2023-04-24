import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1> ByR </h1>

        <nav>
            <ul>
                <li>Shampoo</li>
                <li>Belleza Capilar</li>
                <li>Belleza Facial</li>
                <li>Belleza Corporal</li>
            </ul>
        </nav>

        <CartWidget />
      
    </header>
  )
}

export default NavBar
