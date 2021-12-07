import { addPizza, incrementAmount, removePizza, decrementAmount } from "businessLogic/orderLogic"

test("should add pizza to order", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "M", cost: 5, amount: 1 }
  const freshOrder = addPizza(order, pizza)
  expect(freshOrder[1]).toBeDefined()
  expect(freshOrder[1].size).toBe("M")
})

test("should increment amount", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = incrementAmount(order, pizza)
  expect(freshOrder[0].amount).toBe(2)
  expect(freshOrder[1]).toBeUndefined()
})

test("should increment amount instead of add", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = addPizza(order, pizza)
  expect(freshOrder[0].amount).toBe(2)
  expect(freshOrder[1]).toBeUndefined()
})

test("should remove pizza from order", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = removePizza(order, pizza)
  expect(freshOrder[0]).toBeUndefined()
})

test("should decrement amount", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 2 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = decrementAmount(order, pizza)
  expect(freshOrder[0].amount).toBe(1)
})
