let title = document.getElementById("title");
let dotTitile = title.textContent
  .split("")
  .map((i) => i + ".")
  .join("")
  .toUpperCase();
title.textContent = dotTitile;

console.log('Test Test')
