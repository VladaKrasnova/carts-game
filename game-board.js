
export function startGame() {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="head">
    <div class="time"> 
        <div class="head-timer">
                <p class="timer min">min</p>
                <p class="timer sek">sek</p>
        </div>
            <p class="head-time">00.00</p>
    </div> 
    <div id="click-on-me" class="button">Посмотреть обратную сторону</div>
    <div class="button">Начать заново</div> 
    </div>
    <div class="card" id="game-board"></div>`


    const cardsArray = [ '/img/туз бубны.svg', '/img/король бубны.svg', '/img/дама бубны.svg', '/img/валет бубны.svg', '/img/10 бубны.svg', '/img/9 бубны.svg', '/img/8 бубны.svg', '/img/7 бубны.svg', '/img/6 бубны.svg', 
    'img/туз пики.svg', 'img/король пики.svg', 'img/дама пики.svg', 'img/валет пики.svg', 'img/10 пики.svg', 'img/9 пики.svg', 'img/8 пики.svg', 'img/7 пики.svg', 'img/6 пики.svg',
    'img/туз черви.svg', 'img/король черви.svg', 'img/дама черви.svg', 'img/валет черви.svg', 'img/10 черви.svg', 'img/9 черви.svg', 'img/8 черви.svg', 'img/7 черви.svg', 'img/6 черви.svg',
    'img/туз крести.svg', 'img/король крести.svg', 'img/дама крести.svg', 'img/валет крести.svg', 'img/10 крести.svg', 'img/9 крести.svg', 'img/8 крести.svg', 'img/7 крести.svg', 'img/6 крести.svg',
];


const gameBoard = document.querySelector('#game-board')

    const backOfCardToCopy = ['img/рубашка.svg']
    const backOfCards = Array(36).fill(backOfCardToCopy)
    
    gameBoard.innerHTML = backOfCards.map((backOfCard, index) => {
        return `<div data-set="${index}" class="card-container" id="card-div">
                    <img src="${backOfCard}">
                </div>`
    }).join('')

    const testButton = document.querySelector('#click-on-me');
    testButton.addEventListener('click', function() {
        gameBoard.innerHTML = cardsArray.map((el, index) => {
            return `<div data-set="${index}" class="opened-card-container">
                        <img src="${el}">
                    </div>`
        }).join('');
    })
}
