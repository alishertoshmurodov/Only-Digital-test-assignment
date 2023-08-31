const buttonEls = document.querySelectorAll(".button");

buttonEls.forEach((button) => {
  button.addEventListener("click", function () {
    const placeEl = button.querySelector(".place");
    const iconEl = button.querySelector(".icon");
    const iconEls = document.querySelectorAll(".icon");
    const placeEls = document.querySelectorAll(".place");

    if (placeEl.classList.contains("visible")) {
      placeEl.classList.remove("visible");
      button.removeAttribute("style");
      iconEl.textContent = "+";
    } else {
      for (let i = 0; i < placeEls.length; i++) {
        placeEls[i].classList.remove("visible");
        buttonEls[i].removeAttribute("style");
        iconEls[i].textContent = "+";
      }

      placeEl.classList.add("visible");
      button.style = "max-width: unset; opacity: 1";
      iconEl.textContent = "-";
    }
  });
});
