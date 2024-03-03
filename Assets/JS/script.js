const specificColors = ["#FF90D7", "#90FFFC", "#FFF890"];

const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
  project.addEventListener("mouseover", function () {
    const specificColor = specificColors[index % specificColors.length];
    this.style.boxShadow = `0 0 20px ${specificColor}`;
  });

  project.addEventListener("mouseout", function () {
    this.style.boxShadow = "";
  });
});
