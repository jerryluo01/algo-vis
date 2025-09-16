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

const newArr = document.querySelector(".new");
newArr.addEventListener("click", () => {
    const graphCont = document.querySelector(".graph");
    while (graphCont.firstChild) {
        graphCont.removeChild(graphCont.firstChild);
    }
    graph();
});

const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", sort);

function generateNum() {
    const num = Math.floor(Math.random() * 100 + 1);
    return num;
}

function generateArr() {
    const nums = document.querySelector(".nums");
    const arr = [];
    let length = document.getElementById("length").value;
    for (let i = 0; i < length; i++) {
        arr.push(generateNum());
    }
    nums.textContent = `${arr}`;
    return arr;
}

function graph() {
    arr = generateArr();
    const cont = document.querySelector(".graph");
    let length = document.getElementById("length").value;
    for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        cont.appendChild(div);
        div.classList.add("bar");
        div.style.height = `${0.6 * arr[i]}vh`;
    }
}

function sort(arr) {
    const method = document.getElementById("method");
    method.disabled = true;
    lenSlider.disabled = true;
    newArr.disabled = true;
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
    newArr.disabled = false;
    sortBtn.disabled = false;
    sorting = false;
}

graph();
