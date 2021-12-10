export const sortByTimestamp = (a, b) => a.timestamp > b.timestamp ? 1 : (b.timestamp > a.timestamp ? -1 : 0)

export const sortById = (a, b) => a.id > b.id ? 1 : (b.id > a.id ? -1 : 0)
