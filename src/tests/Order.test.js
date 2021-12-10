import { addPizza, incrementAmount, removePizza, decrementAmount, compileOrder, getCount } from "businessLogic/orderLogic"
import { bonusLevels } from "constants/bonusConstants"

test("should successfully add pizza to order", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "M", cost: 5, amount: 1 }
  const freshOrder = addPizza(order, pizza)
  expect(freshOrder[1]).toBeDefined()
  expect(freshOrder[1].size).toBe("M")
})

test("should successfully increment amount", () => {
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

test("should successfully remove pizza from order", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 1 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = removePizza(order, pizza)
  expect(freshOrder[0]).toBeUndefined()
})

test("should successfully decrement amount", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 2 }]
  const pizza = { name: "Tomaso", size: "L", cost: 5, amount: 1 }
  const freshOrder = decrementAmount(order, pizza)
  expect(freshOrder[0].amount).toBe(1)
})

test("should successfully compile order without bonus", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 2 }]
  const freshOrder = compileOrder(order)
  expect(freshOrder[0].totalCost).toBe(10)
})

test("should successfully compile order with bonus", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 2 }]
  const freshOrder = compileOrder(order, bonusLevels.bronze)
  expect(freshOrder[0].totalCost).toBe(9.5)
})

test("should successfully count pizzas in order", () => {
  const order = [{ name: "Tomaso", size: "L", cost: 5, amount: 2 }, { name: "Tomaso", size: "M", cost: 5, amount: 16 }, { name: "Tomaso", size: "S", cost: 5, amount: 2 }]
  const count = getCount(order)
  expect(count).toBe(20)
})
