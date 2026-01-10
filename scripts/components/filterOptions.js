export function createFilterOptions(type, options) {
  const select = document.createElement("select")
  select.name = type
  select.id = type

  options.forEach(option => {
    const optionElement = document.createElement("option")
    if (option instanceof Date) {
      optionElement.value = option.getTime()
      optionElement.textContent = option.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } else {
      optionElement.value = option
      optionElement.textContent = option
    }

    select.appendChild(optionElement)
  })

  return select
}
