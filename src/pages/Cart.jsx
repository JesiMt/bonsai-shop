import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, removeFromCart, clearCart, totalPrice } = useCart()

  if (items.length === 0)
    return (
      <p className="vacio">
        Tu carrito está vacío. <Link to="/productos">Elegí tu primer bonsái</Link>
      </p>
    )

  return (
    <section>
      <h2 className="titulo">Tu carrito</h2>
      <ul className="lista-carrito">
        {items.map((i) => (
          <li key={i.id}>
            <div>
              <strong>{i.nombre}</strong>
              <span className="especie">{i.cantidad} × ${i.precio.toLocaleString('es-AR')}</span>
            </div>
            <div className="fila-der">
              <span className="precio">${(i.cantidad * i.precio).toLocaleString('es-AR')}</span>
              <button className="btn-link" onClick={() => removeFromCart(i.id)}>Quitar</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${totalPrice.toLocaleString('es-AR')}</p>
      <button className="btn btn-sec" onClick={clearCart}>Vaciar carrito</button>
    </section>
  )
}
