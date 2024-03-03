document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded");

  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    const orderButton = card.querySelector(".btn-outline-primary");

    orderButton.addEventListener("click", function () {
      const title = card.querySelector(".card-title").textContent;

      const orderSummary = `You ordered:\n${title}`;

      alert(orderSummary);
    });
  });
});
