import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="marca">
        <span className="marca-sello">盆</span>
        <span>Shizen Bonsai</span>
      </Link>
      <NavBar />
    </header>
  )
}
