"using strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
    count++;

}


function decrementCount() {
    count--;

}


function resetCount() {
    count = 0;
    
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    incrementCount ();
    



    // STOP HERE


    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    resetCount();
    

    // STOP HERE
    
    
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    decrementCount();


    // STOP HERE


    renderUpdatedCount();
});
