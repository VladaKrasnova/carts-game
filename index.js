import { renderFirstPage, startGame } from "./render.js";

renderFirstPage();

export let difficulty = "";

let choiceLevels = document.querySelectorAll(".level");
let choiceButton = document.querySelector(".btn");


choiceLevels.forEach((level) => {
    level.addEventListener("click", ()=> {
        choiceLevels.forEach((level)=> {
            level.classList.remove("choice");
        });

        level.classList.add("choice");
        choiceButton.disabled = false;
    });
});


choiceButton.addEventListener("click", function () {
    startGame();
});