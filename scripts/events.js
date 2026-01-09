const filtersForm = document.querySelector(".filters")

const filters = [
  {
    type: "day",
    options: [
      "Any date",
      new Date(2024, 2, 13, 11),
      new Date(2024, 2, 14, 11),
      new Date(2024, 2, 14, 20),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 23, 11, 30),
      new Date(2024, 2, 23, 14),
      new Date(2024, 2, 28, 20),
      new Date(2024, 2, 30, 14),
      new Date(2024, 3, 11, 20),
      new Date(2024, 3, 25, 20),
    ],
  },
  { type: "type", options: ["Any type", "offline", "online"] },
  { type: "distance", options: ["Any distance", 25, 50, 75, 100] },
  {
    type: "category",
    options: [
      "Any category",
      "Health and Wellbeing",
      "Social Activities",
      "Business",
      "Technology",
    ],
  },
]

function createFilterOptions(type, options) {
  const select = document.createElement("select")
  select.name = type
  select.id = type

  options.forEach(option => {
    const optionElement = document.createElement("option")
    if (option instanceof Date) {
      optionElement.value = option.getTime() // number
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

function renderFilterOptions(filters) {
  filters.forEach(({ type, options }) => {
    filtersForm.appendChild(createFilterOptions(type, options))
  })
}

renderFilterOptions(filters)
