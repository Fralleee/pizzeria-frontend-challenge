const pizzaOrderMapper = (pizza, amount = 1) => ({ 
  id: pizza.name + pizza.size,
  name: pizza.name, 
  size: pizza.size, 
  cost: pizza.cost, 
  amount 
})
const sortById = (a, b) => a.id > b.id ? 1 : (b.id > a.id ? -1 : 0)

export const addPizza = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return foundPizza ? incrementAmount(order, pizza) : [...order, pizzaOrderMapper(pizza)].sort(sortById)
}

export const removePizza = (order, pizza) => [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size))].sort(sortById)

export const incrementAmount = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size)), pizzaOrderMapper(pizza, foundPizza.amount + 1)].sort(sortById)
}

export const decrementAmount = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size)), pizzaOrderMapper(pizza, foundPizza.amount - 1)].sort(sortById)
}