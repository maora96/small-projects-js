const container = document.getElementById("container");

for (let i = 0; i <= 255; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", change_color);
  container.appendChild(div);
}

function change_color(e) {
  const colors = [
    "crimson",
    "coral",
    "chartreuse",
    "cadetblue",
    "darkorchid",
    "darkturquoise",
    "deeppink",
    "greenyellow",
    "honeydew",
    "indigo",
    "lemonchiffon",
    "lightseagreen",
    "mediumspringgreen",
    "mediumvioletred",
    "orangered",
    "royalblue",
    "sandybrown",
    "silver",
    "turquoise",
  ];
  const chosen_color = colors[Math.floor(Math.random() * colors.length)];

  e.target.style.backgroundColor = chosen_color;
}
