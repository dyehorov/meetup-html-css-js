export function filterByDate(list, value) {
  if (!value || value === "Any date") return list

  const timestamp = Number(value)
  return list.filter(event => event.date.getTime() >= timestamp)
}

export function filterByType(list, value) {
  if (!value || value === "Any type") return list

  return list.filter(event => event.type === value)
}

export function filterByDistance(list, value) {
  if (!value || value === "Any distance") return list

  return list.filter(event => event.distance <= Number(value))
}

export function filterByCategory(list, value) {
  if (!value || value === "Any category") return list

  return list.filter(event => event.category === value)
}
