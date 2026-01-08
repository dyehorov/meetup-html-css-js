const eventsListContainer = document.querySelector(".events-near-container")
const upcomingEventsListContainer = document.querySelector(
  ".upcoming-events-container"
)
const topCategoriesListContainer = document.querySelector(
  ".top-categories-list"
)
const isUserAcceptedPrivacy = JSON.parse(
  localStorage.getItem("isUserAcceptedPrivacy")
)

const acceptPolicyBtn = document.querySelector(".privacy-accept")
const rejectPolicyBtn = document.querySelector(".privacy-reject")
const privacyModal = document.querySelector(".privacy-modal")

if (!isUserAcceptedPrivacy) {
  privacyModal.classList.add("privacy-modal--shown")
}

acceptPolicyBtn.addEventListener("click", () => {
  privacyModal.classList.remove("privacy-modal--shown")

  localStorage.setItem("isUserAcceptedPrivacy", JSON.stringify(true))
})

rejectPolicyBtn.addEventListener("click", () => {
  privacyModal.classList.remove("privacy-modal--shown")
})

window.addEventListener("DOMContentLoaded", () => {
  renderEventCards()
  renderUpcomingEventCards()
  renderTopCategoriesCards()
})

const events = [
  {
    id: 1,
    title: "Day Trading Idea and Strategy",
    category: "Business",
    distanceKm: 5,
    date: "MON, MAR 18",
    time: "7:00 PM PDT",
    going: 1,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-1.jpg",
  },
  {
    id: 2,
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    category: "Business",
    distanceKm: 25,
    date: "TUE, MAR 19",
    time: "5:00 PM PDT",
    going: 41,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-2.jpg",
  },
  {
    id: 3,
    title:
      "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    category: "Technology",
    distanceKm: null,
    date: "WED, MAR 13",
    time: "6:00 PM PDT",
    going: 40,
    price: "Free",
    isOnline: true,
    image: "./assets/images/events/event-3.jpg",
  },
  {
    id: 4,
    title: "INFORMS San Francisco Chapter In-Person Event",
    category: "Health and Wellbeing",
    distanceKm: 50,
    date: "THU, MAR 28",
    time: "5:00 PM PDT",
    going: 41,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-4.jpg",
  },
  {
    id: 5,
    title: "AI Wednesdays – Meet and Greet!",
    category: "Technology",
    distanceKm: 5,
    date: "WED, MAR 13",
    time: "6:30 PM PDT",
    going: 29,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-5.jpg",
  },
  {
    id: 6,
    title: "ROS By-The-Bay March 2024",
    category: "Social Activities",
    distanceKm: null,
    date: "THU, MAR 21",
    time: "6:00 PM PDT",
    going: 51,
    price: "Free",
    isOnline: true,
    image: "./assets/images/events/event-6.jpg",
  },
  {
    id: 7,
    title: "Free Christian Singles' Dinner",
    category: "Hobbies and Passions",
    distanceKm: 10,
    date: "FRI, MAR 29",
    time: "6:00 PM PDT",
    going: 11,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-7.jpg",
  },
  {
    id: 8,
    title: "In-person: Deep Dive into RAG Architectures (Food served)",
    category: "Hobbies and Passions",
    distanceKm: 50,
    date: "THU, MAR 14",
    time: "5:00 PM PDT",
    going: 16,
    price: "Free",
    isOnline: false,
    image: "./assets/images/events/event-8.jpg",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    category: "Business",
    distanceKm: 25,
    date: "THU, MAR 14",
    time: "6:00 PM PDT",
    going: 3,
    price: "Free",
    isOnline: true,
    image: "./assets/images/upcoming-events/upcoming-event-1.jpg",
  },
  {
    id: 2,
    title: "Vision Pro Developers Online Meetup",
    category: "Technology",
    distanceKm: null,
    date: "WED, MAR 13",
    time: "7:00 PM PDT",
    going: 51,
    price: "Free",
    isOnline: true,
    image: "./assets/images/upcoming-events/upcoming-event-2.jpg",
  },
  {
    id: 3,
    title: "Significant Musical Moments",
    category: "Hobbies and Passions",
    distanceKm: 10,
    date: "WED, MAR 13",
    time: "6:00 PM PDT",
    going: 16,
    price: "Free",
    isOnline: true,
    image: "./assets/images/upcoming-events/upcoming-event-3.jpg",
  },
  {
    id: 4,
    title: "FREE Webinar: Introduction to Power BI",
    category: "Technology",
    distanceKm: 33,
    date: "THU, MAR 14",
    time: "5:30 PM PDT",
    going: 33,
    price: "Free",
    isOnline: true,
    image: "./assets/images/upcoming-events/upcoming-event-4.jpg",
  },
]

const topCategories = [
  {
    id: 1,
    title: "Travel and Outdoor",
    image: "./assets/icons/categories/travel_and_outdoor.svg",
  },
  {
    id: 2,
    title: "Social Activities",
    image: "./assets/icons/categories/social_activities.svg",
  },
  {
    id: 3,
    title: "Hobbies and Passions",
    image: "./assets/icons/categories/hobbies_and_passions.svg",
  },
  {
    id: 4,
    title: "Sports and Fitness",
    image: "./assets/icons/categories/sports_and_fitness.svg",
  },
  {
    id: 5,
    title: "Health and Wellbeing",
    image: "./assets/icons/categories/health_and_wellness.svg",
  },
  {
    id: 6,
    title: "Technology",
    image: "./assets/icons/categories/technology.svg",
  },
  {
    id: 7,
    title: "Art and Culture",
    image: "./assets/icons/categories/art_and_culture.svg",
  },
  {
    id: 8,
    title: "Games",
    image: "./assets/icons/categories/games.svg",
  },
]

function createEventCard(event) {
  const {
    title,
    category,
    distanceKm,
    date,
    time,
    going,
    price,
    isOnline,
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
                isOnline,
                category,
                distanceKm
              )}</p>
              <div class="event-card__meta">
                <div class="event-card__date">
                  <img src="./assets/icons/calendar.svg" alt="Calendar icon" />
                  <span>${date} · ${time}</span>
                </div>
                <div class="event-card__footer">
                  <div class="event-card__going">
                    <img
                      src="./assets/icons/checkmark.svg"
                      alt="Checkmark icon"
                    />
                    <span>${going} going</span>
                  </div>
                  <div class="event-card__price">
                    <img src="./assets/icons/ticket.svg" alt="Ticket icon" />
                    <span>${price}</span>
                  </div>
                </div>
              </div>
            </div>`

  li.appendChild(article)

  return li
}

function createTopCategoriesCard(category) {
  const li = document.createElement("li")
  li.classList.add("category-card")

  li.innerHTML = `<div class="category-card-inner">
                      <div class="category-card-content">
                          <div class="category-card-image">
                            <img src="${category.image}" alt="${category.title}">
                          </div>
                          <p class="category-title">${category.title}</p>
                      </div>
  </div>`

  return li
}

function getEventCategory(isOnline, category, distanceKm) {
  if (!isOnline) {
    return `${category} <span>(${distanceKm} km)</span>`
  }

  return category
}

function renderEventCards() {
  events.forEach(event => {
    eventsListContainer.appendChild(createEventCard(event))
  })
}

function renderUpcomingEventCards() {
  upcomingEvents.forEach(event => {
    upcomingEventsListContainer.appendChild(createEventCard(event))
  })
}

function renderTopCategoriesCards() {
  topCategories.forEach(category => {
    topCategoriesListContainer.appendChild(createTopCategoriesCard(category))
  })
}
