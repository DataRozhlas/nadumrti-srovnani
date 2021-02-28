import "./byeie"; // loučíme se s IE
import "./tecky";

const mobilniGrafy = () => {
  const grafy = document.getElementsByClassName("graf");
  for (let g of grafy) {
    g.src = g.src.replace("-des.svg", "-mob.svg");
  }
};

window.innerWidth < 600 ? mobilniGrafy() : null;

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
