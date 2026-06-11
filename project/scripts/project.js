const trails = [
  {
    id: "trail-1",
    name: "Columbia Gorge Panoramic Route",
    difficulty: "Moderate",
    distance: "5.4 miles",
    dogFriendly: true,
    img: "https://picsum.photos/id/1016/400/250",
  },
  {
    id: "trail-2",
    name: "Beacon Rock Summit Ascent",
    difficulty: "Hard",
    distance: "2.1 miles",
    dogFriendly: false,
    img: "https://picsum.photos/id/1025/400/250",
  },
  {
    id: "trail-3",
    name: "Latourell Falls Loop",
    difficulty: "Easy",
    distance: "2.4 miles",
    dogFriendly: true,
    img: "https://picsum.photos/id/1043/400/250",
  },
  {
    id: "trail-4",
    name: "Cape Horn Overlook Path",
    difficulty: "Moderate",
    distance: "7.1 miles",
    dogFriendly: false,
    img: "https://picsum.photos/id/1050/400/250",
  },
];

function updateWeeklyGearFocus() {
  const gearContainer = document.getElementById("weeklyTips");
  if (!gearContainer) return;

  // Array of weekly tips (you can add as many as you like)
  const weeklyTips = [
    "🥾 **Top 5 lightweight backpacking food essentials** – nuts, dried fruit, instant oats, jerky, and dark chocolate.",
    "💧 **Hydration hacks** – Use a collapsible bottle and carry a backup filter.",
    "🧥 **Layering system** – Base layer (wool), mid layer (fleece), shell (waterproof).",
    "🔋 **Power management** – Bring a 10,000 mAh power bank for multi‑day trips.",
    "🧭 **Navigation** – Download offline maps and carry a paper backup.",
    "🍫 **High‑energy snacks** – Peanut butter packets, energy chews, and trail mix.",
    "🩹 **First aid essentials** – Moleskin, antiseptic wipes, and a SAM splint.",
    "🌙 **Sleep system** – Closed‑cell foam pad plus inflatable for cold nights.",
  ];

  // Calculate week number based on the current date (changes every Monday)
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const daysSinceStart = Math.floor(
    (now - startOfYear) / (24 * 60 * 60 * 1000),
  );
  const weekNumber = Math.floor(daysSinceStart / 7);
  const tipIndex = weekNumber % weeklyTips.length;

  gearContainer.innerHTML = weeklyTips[tipIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupFooterDates();
  setupVisitorAnalytics();
  updateWeeklyGearFocus();

  // Conditionally process data if target display elements exist
  if (document.getElementById("trail-gallery-target")) {
    renderTrails(trails);
    setupGalleryFilters();
  }
});

// Function 1: Toggle Mobile Hamburger Menu Navigation State
function setupMobileNav() {
  const toggleBtn = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// Function 2: Tracking LocalStorage Visitor Metrics
function setupVisitorAnalytics() {
  const trackerEl = document.getElementById("analytics-display");
  if (!trackerEl) return;

  let counts = parseInt(localStorage.getItem("trailwise_visits")) || 0;
  counts++;
  localStorage.setItem("trailwise_visits", counts);

  trackerEl.innerHTML = `👋 You've explored TrailWise <strong>${counts}</strong> times! Keep hiking.`;
}

function renderTrails(filteredData) {
  const container = document.getElementById("trail-gallery-target");
  if (!container) return;

  if (filteredData.length === 0) {
    container.innerHTML = `<p class="no-results">No trails found matching your current filter criteria.</p>`;
    return;
  }

  const htmlOutput = filteredData
    .map((trail) => {
      return `
      <article class="card">
        <img src="${trail.img}" alt="${trail.name}" loading="lazy" width="400" height="250">
        <div class="card-content">
          <span class="badge">${trail.difficulty}</span>
          <h3>${trail.name}</h3>
          <p><strong>Distance:</strong> ${trail.distance}</p>
          <p><strong>Dog Friendly:</strong> ${trail.dogFriendly ? "🐾 On-Leash Welcome" : "🚫 No Pets Allowed"}</p>
        </div>
      </article>
    `;
    })
    .join("");

  container.innerHTML = htmlOutput;
}

// Function 4: User Action Evaluation via Conditional Statements
function setupGalleryFilters() {
  const dogSelect = document.getElementById("filter-dog-friendly");
  const diffSelect = document.getElementById("filter-difficulty");

  const runFilterProcess = () => {
    const dogValue = dogSelect.value;
    const diffValue = diffSelect.value;

    const filtered = trails.filter((trail) => {
      // Evaluation tree execution conditional branching
      let matchDog = true;
      if (dogValue === "yes") matchDog = trail.dogFriendly === true;
      if (dogValue === "no") matchDog = trail.dogFriendly === false;

      let matchDiff = true;
      if (diffValue !== "all")
        matchDiff = trail.difficulty.toLowerCase() === diffValue.toLowerCase();

      return matchDog && matchDiff;
    });

    renderTrails(filtered);
  };

  if (dogSelect) dogSelect.addEventListener("change", runFilterProcess);
  if (diffSelect) diffSelect.addEventListener("change", runFilterProcess);
}

function setupFooterDates() {
  const currentYearEl = document.getElementById("currentyear");
  const modificationEl = document.getElementById("lastModified");

  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  if (modificationEl)
    modificationEl.textContent = `Last Modified: ${document.lastModified}`;
}
