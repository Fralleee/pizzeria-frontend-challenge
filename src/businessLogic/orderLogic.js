const pizzaOrderMapper = (pizza, amount = 1) => ({ name: pizza.name, size: pizza.size, cost: pizza.cost, amount })
const identifier = pizza => pizza.name + pizza.size
const sortByName = (a, b) => identifier(a) > identifier(b) ? 1 : (identifier(b) > identifier(a) ? -1 : 0)

export const addPizza = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return foundPizza ? incrementAmount(order, pizza) : [...order, pizzaOrderMapper(pizza)].sort(sortByName)
}

export const removePizza = (order, pizza) => [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size))].sort(sortByName)

export const incrementAmount = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size)), pizzaOrderMapper(pizza, foundPizza.amount + 1)].sort(sortByName)
}

export const decrementAmount = (order, pizza) => {
  const foundPizza = order.find(x => x.name === pizza.name && x.size === pizza.size)
  return [...order.filter(x => !(x.name === pizza.name && x.size === pizza.size)), pizzaOrderMapper(pizza, foundPizza.amount - 1)].sort(sortByName)
}