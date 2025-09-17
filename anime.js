// answering part2 or question2 

// multiplication
function math(a, b) {
    let multy = a * b;
    return multy;
}
math(4, 5); // call our function 

// reverse a string
function reverse(strings) {
    let change = strings.split("");
    return change.reverse().join("");
}
reverse('Wagwan'); 

// using scopes 
let globalCount = 4; // global scope 
function number(value) {
    let add = value + globalCount; // add is local scope 
    return add;
}
number(7); 

// changes in the DOM (counter app)
let counter = 0;
function setupCounter() {
    // grab items 
    let h2 = document.querySelector('#number');
    let increase = document.querySelector('#increase');
    let decrease = document.querySelector('#decrease');

    // increase button 
    increase.addEventListener('click', () => {
        counter++;
        h2.textContent = counter;
    }); 

    // decrease button 
    decrease.addEventListener('click', () => {
        counter--;
        h2.textContent = counter;
    }); 
}

// run function when page is loaded
document.addEventListener('DOMContentLoaded', setupCounter);

// Modal logic
function modalControl() {
    const modal = document.getElementById('modal');
    const showBtn = document.getElementById('show-modal');
    const closeBtn = document.getElementById('close-modal');

    showBtn.addEventListener('click', () => {
        modal.classList.add('show'); // trigger CSS animation
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show'); // hide animation
    });

    // Close modal if background is clicked
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// initialize everything
modalControl();
