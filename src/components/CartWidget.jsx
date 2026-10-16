import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function CartWidget() {
  const { totalQty } = useCart()
  return (
    <Link to="/carrito" className="carrito-link" aria-label={`Carrito, ${totalQty} productos`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h2l2.4 11h10.2L20 7H6.2" />
        <circle cx="9" cy="19.5" r="1.3" />
        <circle cx="17" cy="19.5" r="1.3" />
      </svg>
      {totalQty > 0 && <span className="badge">{totalQty}</span>}
    </Link>
  )
}
