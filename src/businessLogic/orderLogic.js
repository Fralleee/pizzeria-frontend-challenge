import { sortById } from "./sortingLogic"

const pizzaOrderMapper = (pizza, amount = 1) => ({
  id: pizza.name + pizza.size,
  name: pizza.name,
  size: pizza.size,
  cost: pizza.cost,
  amount
})

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

export const compileOrder = (order, bonus) =>
  order.map(({ id, name, size, amount, cost }) => ({ id, name, size, amount, totalCost: amount * cost * (1 - (bonus?.deductionPercentage ?? 0)) }))

export const clearOrder = () => ([])

export const getCount = order => order.reduce((count, item) => count += item.amount, 0)
