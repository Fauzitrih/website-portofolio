const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");
const popup = document.querySelector("#welcomePopup");
const closePopup = document.querySelector("#closePopup");
const popupLater = document.querySelector("#popupLater");
const popupWork = document.querySelector("#popupWork");

const hidePopup = () => {
  popup.classList.remove("show");
  popup.setAttribute("aria-hidden", "true");
};

const showPopup = () => {
  popup.classList.add("show");
  popup.setAttribute("aria-hidden", "false");
};

window.addEventListener("load", () => {
  setTimeout(showPopup, 600);
});

closePopup.addEventListener("click", hidePopup);
popupLater.addEventListener("click", hidePopup);
popupWork.addEventListener("click", hidePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) hidePopup();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hidePopup();
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
    });
  });
});
