import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <h1>Un árbol pequeño, años de paciencia.</h1>
      <p>Bonsáis cultivados con cuidado, listos para acompañarte en casa. Cada uno llega con su guía de riego, luz y poda.</p>
      <Link to="/productos" className="btn">Ver bonsáis</Link>
    </section>
  )
}
