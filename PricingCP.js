const toggleSwitch = document.getElementById("toggle-switch");
const monthlyPrices = document.querySelectorAll(".monthly-price");
const annualPrices = document.querySelectorAll(".annual-price");

// Initial state
toggleSwitch.checked = false;
annualPrices.forEach((price) => {
  price.style.display = "none";
});

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    monthlyPrices.forEach((price) => {
      price.style.textDecoration = "line-through";
    });

    annualPrices.forEach((price) => {
      price.style.display = "inline";
    });
  } else {
    monthlyPrices.forEach((price) => {
      price.style.textDecoration = "none";
    });

    annualPrices.forEach((price) => {
      price.style.display = "none";
    });
  }
});
