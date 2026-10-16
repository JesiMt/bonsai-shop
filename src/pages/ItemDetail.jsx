import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BonsaiArt from '../components/BonsaiArt.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function ItemDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  useEffect(() => {
    setCargando(true)
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => setProducto(data.find((p) => p.id === Number(id)) || null))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <p className="vacio">Cargando…</p>
  if (!producto)
    return (
      <p className="vacio">
        No encontramos ese bonsái. <Link to="/productos">Volver al catálogo</Link>
      </p>
    )

  const agregar = () => {
    addToCart(producto, cantidad)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1800)
  }

  return (
    <section className="detalle">
      <BonsaiArt color={producto.color} />
      <div>
        <h2>{producto.nombre}</h2>
        <p className="especie">{producto.especie} · {producto.tamano}</p>
        <p className="precio grande">${producto.precio.toLocaleString('es-AR')}</p>
        <p>{producto.descripcion}</p>
        <p><strong>Cuidados:</strong> {producto.cuidados}</p>
        <p className="stock">Stock: {producto.stock} unidades</p>
        <div className="cantidad">
          <button onClick={() => setCantidad((c) => Math.max(1, c - 1))} aria-label="Menos">−</button>
          <span>{cantidad}</span>
          <button onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))} aria-label="Más">+</button>
        </div>
        <button className="btn" onClick={agregar}>
          {agregado ? 'Agregado al carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </section>
  )
}
