import { bonusLevels } from "constants/bonusConstants"

export const getBonusText = (bonus) => `You have received ${bonus.deductionPercentage * 100}% bonus`

export const getNextAvailableBonusText = (amount, bonus) =>
  bonus && `Spend $${-(Math.round((amount - bonus.threshold) * 100) / 100).toFixed(2)} more to receive ${bonus.deductionPercentage * 100}% bonus`

export const getBonusAmounts = (amount, bonus) => ({
  total: amount * (1 - (bonus?.deductionPercentage ?? 0)),
  bonusOnly: amount * (bonus?.deductionPercentage ?? 0)
})

export const calculateBonus = (order) => {
  const { gold, silver, bronze } = bonusLevels
  const amount = order.reduce((acc, curr) => (acc += curr.cost * curr.amount), 0)
  return amount >= gold.threshold
    ? { amount, appliedBonus: gold }
    : amount >= silver.threshold
      ? { amount, appliedBonus: silver, nextAvailableBonus: gold }
      : amount >= bronze.threshold
        ? { amount, appliedBonus: bronze, nextAvailableBonus: silver }
        : { amount, nextAvailableBonus: bronze }
}
