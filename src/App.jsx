import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ItemListContainer from './pages/ItemListContainer.jsx'
import ItemDetail from './pages/ItemDetail.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<p className="vacio">Esta página no existe.</p>} />
      </Route>
    </Routes>
  )
}
