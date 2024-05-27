let userNum = 16;
let container = document.querySelector("#container");
container.style.width = '906px'
container.style.height = '960px'
const measurement = (904)/(userNum);
function makeDivs() {
        for (let i = 0; i < userNum; i++) {
            boxOfSq = document.createElement("div");
            boxOfSq.classList.add('boxOfSq');
                for (let sqRun = 0; sqRun < userNum; sqRun++){
                squares = document.createElement("div");
                squares.style.height = `${measurement}px`;
                squares.style.width = `${measurement}px`;
                squares.classList.add('squares');
                squares.addEventListener("mouseover", function (e) {
                    e.currentTarget.style.backgroundColor = 'blue';
                }
            );
                boxOfSq.appendChild(squares);}
                container.appendChild(boxOfSq);
        };
};


makeDivs();
console.log(squares);


let resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener('click', (event) => {
        userNum = parseInt(prompt('Choose a number 1-100', '16'));
        while (container.firstChild) {
            container.firstChild.remove();
        }
    
    
        makeDivs();

});




