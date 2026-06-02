// Product Array Data Source
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power zones", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage liner", averagerating: 3.9 },
  { id: "jm-1090", name: "warp equalizer", averagerating: 5.0 },
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate Product Dropdown if we are on the form page
  const productSelect = document.getElementById("product-name");

  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      // Set value attribute to the product's unique id
      option.value = product.id;
      // Capitalize first letter of product name for display
      option.textContent =
        product.name.charAt(0).toUpperCase() + product.name.slice(1);
      productSelect.appendChild(option);
    });
  }

  // 2. Handle Review Counter on the confirmation page (review.html)
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount");

    // Convert string data back to an integer or default to 0
    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    // Increment the count by one for a successful form submission
    reviewCount += 1;

    // Save the updated count back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the count on the page safely
    const counterDisplay = document.getElementById("counter-display");
    if (counterDisplay) {
      counterDisplay.textContent = reviewCount;
    }
  }

  // 3. Update Footer Copyright Year and Last Modified Info
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const lastModParagraph = document.getElementById("last-modified");
  if (lastModParagraph)
    lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
});
