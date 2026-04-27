const interactiveCards = document.querySelectorAll(
  ".link-card, .action-button, .downloads-button"
);

interactiveCards.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("clicked");

    window.setTimeout(() => {
      item.classList.remove("clicked");
    }, 180);
  });
});
