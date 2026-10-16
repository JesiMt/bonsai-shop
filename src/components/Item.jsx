import { Link } from 'react-router-dom'
import BonsaiArt from './BonsaiArt.jsx'

export default function Item({ id, nombre, especie, precio, color }) {
  return (
    <article className="item">
      <Link to={`/producto/${id}`} className="item-arte">
        <BonsaiArt color={color} />
      </Link>
      <div className="item-info">
        <h3>{nombre}</h3>
        <p className="especie">{especie}</p>
        <p className="precio">${precio.toLocaleString('es-AR')}</p>
        <Link to={`/producto/${id}`} className="btn btn-sec">Ver detalle</Link>
      </div>
    </article>
  )
}
