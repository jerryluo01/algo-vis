let sorting = false;
let arr;

const lenSlider = document.getElementById("length");
const lenDisplay = document.getElementById("lenDisplay");

lenSlider.addEventListener("input", () => {
    lenDisplay.textContent = lenSlider.value;
    const graphCont = document.querySelector(".graph");
    while (graphCont.firstChild) {
        graphCont.removeChild(graphCont.firstChild);
    }
    graph();
});

const speedSlider = document.getElementById("speed");
const speedDisplay = document.getElementById("speedDisplay");

speedSlider.addEventListener("input", () => {
    speedDisplay.textContent = speedSlider.value;
});

const shuffleBtn = document.querySelector(".new");
shuffleBtn.addEventListener("click", shuffle);

const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", sortit);

// function generateNum() {
//     const num = Math.floor(Math.random() * 100 + 1);
//     return num;
// }

function shuffle() {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateArr() {
    const nums = document.querySelector(".nums");
    const arr = [];
    let length = parseInt(document.getElementById("length").value);
    for (let i = 0; i < length; i++) {
        arr.push(i + 1);
    }
    nums.textContent = `${arr}`;
    return arr;
}

function graph() {
    arr = generateArr();
    const cont = document.querySelector(".graph");
    let length = parseInt(document.getElementById("length").value);
    for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        cont.appendChild(div);
        div.classList.add("bar");
        div.id = `${i}`;
        div.style.height = `${arr[i]}vh`;
    }
}

function sortit() {
    const method = document.getElementById("method");
    method.disabled = true;
    lenSlider.disabled = true;
    shuffleBtn.disabled = true;
    sortBtn.disabled = true;
    sorting = true;

    let selected = false;

    switch (method.value) {
        case "bubble":
            bubble(arr);
            break;

        case "insertion":
            insertion(arr);
            break;

        case "selection":
            selection(arr);
            break;

        case "quick":
            quick(arr);
            break;

        case "shell":
            shell(arr);
            break;
    }

    method.disabled = false;
    lenSlider.disabled = false;
    shuffleBtn.disabled = false;
    sortBtn.disabled = false;
    sorting = false;
}

graph();
