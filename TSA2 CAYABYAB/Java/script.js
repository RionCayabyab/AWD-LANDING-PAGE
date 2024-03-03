document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  let currentBox = null;
  let previousBox = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const color = getComputedStyle(button).backgroundColor;

      const newBox = document.createElement("div");
      newBox.className = "box";
      newBox.style.backgroundColor = color;
      newBox.style.borderColor = color;
      document.body.appendChild(newBox);

      if (currentBox) {
        previousBox = currentBox;
        previousBox.style.top = "-100%";
      }

      setTimeout(() => {
        newBox.classList.add("show");
        setTimeout(() => {
          newBox.style.backgroundColor = "transparent";
          newBox.classList.add("change-color");
        }, 100);
      }, 100);

      currentBox = newBox;
    });
  });
});
