export function createEventCard(event) {
  const {
    title,
    category,
    distance,
    date,
    time,
    attendees,
    price,
    type,
    image,
  } = event

  const li = document.createElement("li")
  li.classList.add("event-list-item")

  const article = document.createElement("article")
  article.classList.add("event-card")

  article.innerHTML = `<div class="event-card__image">
                <img
                  src="${image}"
                  alt="${title}"
                  loading="lazy"
                />
              </div>
              <div class="event-card__content">
                <h3 class="event-card__title">${title}</h3>
                <p class="event-card__category">${getEventCategory(
                  type,
                  category,
                  distance
                )}</p>
                <div class="event-card__meta">
                  <div class="event-card__date">
                    <img src="/assets/icons/calendar.svg" alt="Calendar icon" />
                    <span>${formatDate(date, time)}</span>
                  </div>
                  <div class="event-card__footer">
                    <div class="event-card__going">
                      <img
                        src="/assets/icons/checkmark.svg"
                        alt="Checkmark icon"
                      />
                      <span>${attendees} going</span>
                    </div>
                    <div class="event-card__price">
                      <img src="/assets/icons/ticket.svg" alt="Ticket icon" />
                      <span>${price}</span>
                    </div>
                  </div>
                </div>
              </div>`

  li.appendChild(article)

  return li
}

function getEventCategory(type, category, distance) {
  const isOnline = type === "online" ? true : false

  if (!isOnline) {
    return `${category} <span>(${distance} km)</span>`
  }

  return category
}

function formatDate(date, time) {
  const dateFormat = date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  if (time === undefined) {
    const time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    return `${dateFormat} · ${time}`
  }

  return `${dateFormat} · ${time}`
}
