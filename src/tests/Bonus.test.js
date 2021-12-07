import { getBonusAmounts, calculateBonus } from "businessLogic/bonusLogic"
import { bonusLevels } from "constants/bonusConstants"

test("should calculate next available bonus without any applied bonus", () => {
  const order = [{ "name": "Tomaso", "size": "L", "cost": 5, "amount": 1 }, { "name": "Vegetarian", "size": "M", "cost": 5, "amount": 1 }]
  const bonus = calculateBonus(order)
  expect(bonus.appliedBonus).toBeUndefined()
  expect(bonus.nextAvailableBonus).toEqual(bonusLevels.bronze)
})

test("should calculate amounts without any applied bonus", () => {
  const order = [{ "name": "Tomaso", "size": "L", "cost": 5, "amount": 1 }, { "name": "Vegetarian", "size": "M", "cost": 5, "amount": 1 }]
  const bonus = calculateBonus(order)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)
  expect(bonus.appliedBonus).toBeUndefined()
  expect(bonusAmounts.total).toEqual(10)
  expect(bonusAmounts.bonusOnly).toEqual(0)
})

test("should calculate bonus amounts with applied bonus bronze", () => {
  const order = [{ "name": "Tomaso", "size": "L", "cost": 5, "amount": 10 }]
  const bonus = calculateBonus(order)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)

  expect(bonus.appliedBonus).toEqual(bonusLevels.bronze)
  expect(bonus.nextAvailableBonus).toEqual(bonusLevels.silver)
  expect(bonusAmounts.total).toEqual(47.5)
  expect(bonusAmounts.bonusOnly).toEqual(2.5)
})

test("should calculate bonus amounts with applied bonus silver", () => {
  const order = [{ "name": "Tomaso", "size": "L", "cost": 5, "amount": 20 }]
  const bonus = calculateBonus(order)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)

  expect(bonus.appliedBonus).toEqual(bonusLevels.silver)
  expect(bonus.nextAvailableBonus).toEqual(bonusLevels.gold)
  expect(bonusAmounts.total).toEqual(90)
  expect(bonusAmounts.bonusOnly).toEqual(10)
})

test("should calculate bonus amounts with applied bonus gold", () => {
  const order = [{ "name": "Tomaso", "size": "L", "cost": 5, "amount": 40 }]
  const bonus = calculateBonus(order)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)

  expect(bonus.appliedBonus).toEqual(bonusLevels.gold)
  expect(bonus.nextAvailableBonus).toBeUndefined()
  expect(bonusAmounts.total).toEqual(160)
  expect(bonusAmounts.bonusOnly).toEqual(40)
})
