import { filters, eventsStore } from "./data/data.js"
import { createFilterOptions } from "./components/filterOptions.js"
import { createEventCard } from "./components/eventCard.js"
import { renderFilterOptions, renderEventCards } from "./render/render.js"
import { initPrivacyModal } from "./ui/privacyModal.js"
import {
  filterByDate,
  filterByType,
  filterByDistance,
  filterByCategory,
} from "./filter/filter.js"

const filtersForm = document.querySelector(".filters")
const eventsListContainer = document.querySelector(".events-list-container")
const resetFiltersBtn = document.querySelector(".reset-filters-btn")
const filterNoResultsContainer = document.querySelector(".filter-no-results")
const resetFiltersInput = document.querySelector(".reset-filter-input")

initPrivacyModal()
renderFilterOptions(filters, filtersForm, createFilterOptions)
renderEventCards(eventsStore, eventsListContainer, createEventCard)

filtersForm.addEventListener("change", () => {
  const day = document.querySelector("#day").value
  const type = document.querySelector("#type").value
  const distance = document.querySelector("#distance").value
  const category = document.querySelector("#category").value

  resetFiltersInput.classList.remove("hidden")

  let filtered = [...eventsStore]

  filtered = filterByDate(filtered, day)
  filtered = filterByType(filtered, type)
  filtered = filterByDistance(filtered, distance)
  filtered = filterByCategory(filtered, category)

  eventsListContainer.innerHTML = ""

  if (filtered.length === 0) {
    filterNoResultsContainer.classList.remove("hidden")

    return
  }

  filterNoResultsContainer.classList.add("hidden")
  renderEventCards(filtered, eventsListContainer, createEventCard)
})

resetFiltersBtn.addEventListener("click", () => {
  filtersForm.reset()
})

filtersForm.addEventListener("reset", () => {
  resetFiltersInput.classList.add("hidden")
  filterNoResultsContainer.classList.add("hidden")

  renderEventCards(eventsStore, eventsListContainer, createEventCard)
})
