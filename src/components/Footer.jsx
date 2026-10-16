
const equipo = [
  { nombre: 'Yamila Dominguez', rol: 'Desarrollo frontend', mail: 'yamdom@gmail.com' },
  { nombre: 'Agustina Merlotti', rol: 'Diseño y contenido', mail: 'agustina.merlotti@gmail.com' },
  { nombre: 'Jesica Takahashi', rol: 'Atención al cliente', mail: 'jesica.takahashi@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-empresa">
        <h3>Shizen Bonsai</h3>
        <p>Vivero especializado en bonsáis. Cultivamos cada árbol durante años y lo enviamos con una guía de cuidados.</p>
        <p>Av. 7 numero 450 La Plata · Lunes a sábado, 10 a 18 hs</p>
        <p>hello@shizenbonsai.com</p>
      </div>
      <div className="equipo">
        {equipo.map((p, i) => (
          <article className="persona" key={i}>
            <div className="avatar">{p.nombre[0]}</div>
            <strong>{p.nombre}</strong>
            <span>{p.rol}</span>
            <a href={`mailto:${p.mail}`}>{p.mail}</a>
          </article>
        ))}
      </div>
    </footer>
  )
}
