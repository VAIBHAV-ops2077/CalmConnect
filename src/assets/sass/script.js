const toggle = document.getElementById("modeToggle");
const modeText = document.getElementById("modeText");
const introvertSection = document.getElementById("introvertSection");
const extrovertSection = document.getElementById("extrovertSection");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    introvertSection.style.display = "none";
    extrovertSection.style.display = "block";
    modeText.textContent = "Extrovert Mode";
  } else {
    extrovertSection.style.display = "none";
    introvertSection.style.display = "block";
    modeText.textContent = "Introvert Mode";
  }
});
