
export function renderFirstPage() {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="content" >
    <h1 class="text">Выбери <br>сложность</h1>
        <div class="levels">
        <button type="button" value="1" class="level level1">1</button>
        <button type="button" value="2" class="level level2">2</button>
        <button type="button" value="3" class="level level3">3</button>
        </div>
        <button type="submit" class="btn" disabled>Старт</button>
        </div>`;
}


export function startGame() {
    const app = document.getElementById('app');
    app.innerHTML = `<div>Игра началась!</div> `
}

let cardsForGame = [];


export function issuingСards() {
    let lengthArr = "";
    if (difficulty === "1") {
        lengthArr = 6;
    }
    if (difficulty === "2") {
        lengthArr = 12;
    }
    if (difficulty === "3") {
        lengthArr = 18;
    }
}

