(function displaySubmissionData() {
  const urlParams = new URLSearchParams(window.location.search);

  const fullName = urlParams.get("fullname") || "";
  const email = urlParams.get("email") || "";
  const hikeStyleRaw = urlParams.get("hikestyle") || "";
  const userBio = urlParams.get("userbio") || "";

  let hikeStyleDisplay = "Not specified";
  if (hikeStyleRaw === "casual") hikeStyleDisplay = "Day Hiking Excursions";
  else if (hikeStyleRaw === "backpack")
    hikeStyleDisplay = "Multi-day Wilderness Backpacking";
  else if (hikeStyleRaw === "alpine")
    hikeStyleDisplay = "Technical Alpine Mountaineering";
  else if (hikeStyleRaw) hikeStyleDisplay = hikeStyleRaw;

  const displayNameElem = document.getElementById("displayFullName");
  const displayEmailElem = document.getElementById("displayEmail");
  const displayHikeElem = document.getElementById("displayHikeStyle");
  const displayBioElem = document.getElementById("displayBio");
  const greetingElem = document.getElementById("greetingMessage");

  if (displayNameElem) {
    if (fullName.trim() !== "") {
      displayNameElem.textContent = fullName;
      if (greetingElem)
        greetingElem.textContent = `🙌 Thanks, ${fullName.split(" ")[0]}!`;
    } else {
      displayNameElem.textContent = "Adventurer";
      if (greetingElem) greetingElem.textContent = "🙌 Thanks, Trail Explorer!";
    }
  }

  if (displayEmailElem) {
    displayEmailElem.textContent =
      email && email.trim() !== ""
        ? email
        : "hello@trailwise.com (placeholder)";
  }

  if (displayHikeElem) displayHikeElem.textContent = hikeStyleDisplay;

  if (displayBioElem) {
    if (userBio && userBio.trim() !== "") {
      displayBioElem.textContent = userBio;
    } else {
      displayBioElem.textContent =
        "⚡ No background added yet — but we already know you love the outdoors! Feel free to update your profile later.";
    }
  }

  if (
    (!fullName || fullName.trim() === "") &&
    email &&
    email.includes("@") &&
    greetingElem
  ) {
    const emailName = email.split("@")[0];
    if (emailName) greetingElem.textContent = `🙌 Thanks, ${emailName}!`;
  }
})();
