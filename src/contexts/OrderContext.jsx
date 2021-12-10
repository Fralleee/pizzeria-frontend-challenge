import { createContext, useState } from "react"
import { addPizza, incrementAmount, removePizza, decrementAmount, clearOrder, getCount } from "businessLogic/orderLogic"

const getDefaultOrder = () => {
  try {
    return JSON.parse(localStorage.getItem("order")) ?? []
  }
  catch (e) {
    console.warn(e)
  }
}

export const OrderContext = createContext({})

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(getDefaultOrder())
  const [counter, setCounter] = useState(getCount(order))

  const updateOrder = newOrder => {
    setCounter(getCount(newOrder))
    setOrder(newOrder)
    localStorage.setItem("order", JSON.stringify(newOrder))
  }

  const add = pizza => updateOrder(addPizza(order, pizza))
  const remove = pizza => updateOrder(removePizza(order, pizza))
  const increment = pizza => updateOrder(incrementAmount(order, pizza))
  const decrement = pizza => updateOrder(decrementAmount(order, pizza))
  const clear = () => updateOrder(clearOrder())

  return <OrderContext.Provider value={{ order, add, remove, increment, decrement, clear, counter }}>
    {children}
  </OrderContext.Provider>
}