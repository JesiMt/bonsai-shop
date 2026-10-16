import { createContext, useContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (producto, cantidad = 1) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id)
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id
            ? { ...i, cantidad: Math.min(i.cantidad + cantidad, producto.stock) }
            : i
        )
      }
      return [...prev, { ...producto, cantidad }]
    })
  }

  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id))
  const clearCart = () => setItems([])

  const totalQty = items.reduce((acc, i) => acc + i.cantidad, 0)
  const totalPrice = items.reduce((acc, i) => acc + i.cantidad * i.precio, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalQty, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
