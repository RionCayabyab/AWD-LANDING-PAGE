function changeColor() {
  var container = document.querySelector(".container");

  var currentColor = container.style.backgroundColor;

  if (currentColor === "rgb(229, 251, 229)") {
    container.style.backgroundColor = "white";
    container.style.color = "#8abd91";
  } else {
    container.style.backgroundColor = "#e5fbe5";
    container.style.color = "#154734";
  }
}
