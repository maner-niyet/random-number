const minInput = document.querySelector("#lowLimit");
const maxInput = document.querySelector("#upLimit");
const randomNumSpan = document.querySelector("#randomNum");
const generateBtn = document.querySelector("#generateBtn");
const clearBtn = document.querySelector("#clearBtn");


function generateRandomNum() {
    const minNum = Number(minInput.value);
    const maxNum = Number(maxInput.value);
    if (minNum > maxNum || !minInput.value === "" || maxInput.value === ""){
        randomNumSpan.innerHTML = "Invalid Input"
    } else {
        const randomNum = Math.floor((maxNum - minNum) * Math.random()) + minNum
        randomNumSpan.innerHTML = randomNum
    }
    /* 
    let step1 = maxNum - minNum 
    let step2 = Math.random() * step1
    let random = Math.floor(step2) + minNum
     */
}

function clearInput() {
    minInput.value = "";
    maxInput.value = "";
    randomNumSpan.innerHTML = ""; 
}
