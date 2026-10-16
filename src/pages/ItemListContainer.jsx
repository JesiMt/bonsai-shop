import { useEffect, useState } from 'react'
import Item from '../components/Item.jsx'

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el catálogo')
        return res.json()
      })
      .then(setProductos)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p className="vacio">Cargando bonsáis…</p>
  if (error) return <p className="vacio">{error}. Probá recargar la página.</p>

  return (
    <section>
      <h2 className="titulo">Nuestros bonsáis</h2>
      <div className="grilla">
        {productos.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}
