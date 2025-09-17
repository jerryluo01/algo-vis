function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubble(array) {
    for (let i = 0; i < array.length; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const bar1 = document.getElementById(`${j}`);
                const bar2 = document.getElementById(`${j + 1}`);
                bar2.style.backgroundColor = "red";
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
                update(array);
                await sleep(speed);
                bar2.style.backgroundColor = "white";
            }
        }
        if (!swapped) break;
    }
}

function insertion(array) {}

function selection(array) {}

function quick(array) {}

function shell(array) {}
