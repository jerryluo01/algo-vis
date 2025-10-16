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
                bar1.style.backgroundColor = "blue";
                bar2.style.backgroundColor = "red";
                await sleep(speed);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
                update(array);
                bar1.style.backgroundColor = "blue";
                bar2.style.backgroundColor = "red";
                await sleep(speed);
                bar1.style.backgroundColor = "white";
                bar2.style.backgroundColor = "white";
            }
        }
        if (!swapped) break;
    }
}

async function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        const keyBord = document.getElementById(`${i}`);
        keyBord.style.border = "2px solid yellow";

        await sleep(speed);

        while (j >= 0 && array[j] > key) {
            let bar1 = document.getElementById(`${j}`);
            // bar2 = document.getElementById(`${j + 1}`);
            bar1.style.backgroundColor = "blue";
            // bar2.style.backgroundColor = "red";
            await sleep(speed);
            update(array);

            array[j + 1] = array[j];
            j--;

            update(array);
            let bar2 = document.getElementById(`${j + 2}`);
            bar2.style.backgroundColor = "red";
            bar1 = document.getElementById(`${j + 1}`);
            bar1.style.backgroundColor = "blue";
            await sleep(speed);
            bar1.style.backgroundColor = "white";
            bar2.style.backgroundColor = "white";
        }

        array[j + 1] = key;
        update(array);
        await sleep(speed);
        keyBord.style.border = "";
    }
}

async function selection(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        let bar1 = document.getElementById(`${min_idx}`);
        bar1.style.backgroundColor = "blue";

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min_idx]) {
                min_idx = j;

                const bar2 = document.getElementById(`${min_idx}`);
                update(array);
                bar2.style.backgroundColor = "red";
                await sleep(speed);
                bar2.style.backgroundColor = "white";
            }
        }
        bar1 = document.getElementById(`${i}`);
        const bar2 = document.getElementById(`${min_idx}`);
        bar2.style.backgroundColor = "red";

        let temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;

        update(array);
        bar1.style.backgroundColor = "blue";
        bar2.style.backgroundColor = "red";
        await sleep(speed);
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
    }
}

async function quick(array) {
    function partition(array, low, high) {
        let pivot = array[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        return i + 1;
    }

    function quickSort(array, low, high) {
        if (low >= high) return;
        let pi = partition(array, low, high);

        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

async function shell(array) {
    let n = array.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            const bar1 = document.getElementById(`${j}`);
            const bar2 = document.getElementById(`${j + 1}`);
            bar1.style.backgroundColor = "blue";
            bar2.style.backgroundColor = "red";
            await sleep(speed);

            let j = i;
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
    }
}
