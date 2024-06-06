let userNum = 16;
let container = document.querySelector("#container");
container.style.width = '960px'
container.style.height = '960px'

//creates the squares that make up the grid
// need to create another function so there is not so much repetition between makeDivs
// and makeDivsColor...too messy

function makeDivs() {
        const measurement = (920 - (userNum * 4)) /(userNum);
        for (let i = 0; i < userNum; i++) {
            boxOfSq = document.createElement("div");
            boxOfSq.classList.add('boxOfSq');
                for (let sqRun = 0; sqRun < userNum; sqRun++){
                squares = document.createElement("div");
                squares.style.height = `${measurement}px`;
                squares.style.width = `${measurement}px`;
                squares.classList.add('squares');
                
                //adds event listener that assigns a random color 
                squares.addEventListener("mouseover", function (e) {
                    e.currentTarget.style.backgroundColor = "grey"
                }   
            );
                boxOfSq.appendChild(squares);}
                container.appendChild(boxOfSq);
        };
};
function makeDivsColor() {
    const measurement = (920 - (userNum * 4)) /(userNum);
    for (let i = 0; i < userNum; i++) {
        boxOfSq = document.createElement("div");
        boxOfSq.classList.add('boxOfSq');
            for (let sqRun = 0; sqRun < userNum; sqRun++){
            squares = document.createElement("div");
            squares.style.height = `${measurement}px`;
            squares.style.width = `${measurement}px`;
            squares.classList.add('squares');
            
            //adds event listener that assigns a random color 
            squares.addEventListener("mouseover", function (e) {
                redValue = Math.floor(Math.random() * 255);
                blueValue = Math.floor(Math.random() * 255);
                greenValue = Math.floor(Math.random() * 255);
               
                redGreenBlue = (`rgb(${redValue}, ${greenValue}, ${blueValue}`);
                e.currentTarget.style.backgroundColor = redGreenBlue;
                
            }   
        );
            boxOfSq.appendChild(squares);}
            container.appendChild(boxOfSq);
    };
};

makeDivs();
console.log(squares);

// random colors button
let colorsBtn = document.querySelector("#randomColorsBtn");
    colorsBtn.addEventListener('click', (event) => {
        while (container.firstChild) {
            container.firstChild.remove();
        }
        makeDivsColor();
        });
    

//reset button that prompts user for new number and clears previous grid
let resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener('click', (event) => {
        userNum = parseInt(prompt('Choose a number 1-100', '16'));
            if (userNum> 100) {
                alert('Maximum is 100');
                userNum = 100
            }
        while (container.firstChild) {
            container.firstChild.remove();
        }
    
    
        makeDivs();

});




