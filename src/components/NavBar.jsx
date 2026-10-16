import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget.jsx'

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <CartWidget />
    </nav>
  )
}
