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
        keyBord.style.border = "3px solid green";

        await sleep(speed);

        while (j >= 0 && array[j] > key) {
            await sleep(speed);
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
    let low = 0;
    let high = array.length - 1;
    async function partition(array, low, high) {
        let pivot = array[high];
        let piv = document.getElementById(`${high}`);
        let lim = document.getElementById(`${low}`);
        let i = low - 1;

        await sleep(speed);
        piv.style.border = "3px solid green";
        lim.style.border = "3px solid yellowgreen";

        for (let j = low; j <= high - 1; j++) {
            if (array[j] < pivot) {
                i++;
                let barI = document.getElementById(`${i}`);
                let barJ = document.getElementById(`${j}`);
                barI.style.backgroundColor = "blue";
                barJ.style.backgroundColor = "red";
                await sleep(speed);

                [array[i], array[j]] = [array[j], array[i]];
                barI.style.backgroundColor = "red";
                barJ.style.backgroundColor = "blue";
                update(array);
                await sleep(speed);
                barI.style.backgroundColor = "white";
                barJ.style.backgroundColor = "white";
            }
        }
        let barI = document.getElementById(`${i + 1}`);
        let barJ = document.getElementById(`${high}`);
        barI.style.backgroundColor = "blue";
        barJ.style.backgroundColor = "red";
        await sleep(speed);
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        barI.style.backgroundColor = "red";
        barJ.style.backgroundColor = "blue";
        update(array);
        await sleep(speed);
        barI.style.backgroundColor = "white";
        barJ.style.backgroundColor = "white";
        piv.style.border = "";
        lim.style.border = "";
        return i + 1;
    }

    async function quickSort(array, low, high) {
        if (low >= high) return;
        let pi = await partition(array, low, high);

        await quickSort(array, low, pi - 1);
        await quickSort(array, pi + 1, high);
    }
    await quickSort(array, low, high);
}

async function shell(array) {
    let n = array.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];

            const gap1 = document.getElementById(`${i}`);
            const gap2 = document.getElementById(`${i - gap}`);

            gap1.style.border = "solid 3px greenyellow";
            gap2.style.border = "solid 3px green";
            gap1.style.backgroundColor = "blue";
            gap2.style.backgroundColor = "red";

            await sleep(speed);

            let j = i;
            while (j >= gap && array[j - gap] > temp) {
                const bar1 = document.getElementById(`${j}`);
                const bar2 = document.getElementById(`${j - gap}`);
                // bar1.style.backgroundColor = "blue";
                // bar2.style.backgroundColor = "red";

                array[j] = array[j - gap];
                update(array);
                bar1.style.backgroundColor = "red";
                bar2.style.backgroundColor = "blue";
                await sleep(speed);
                bar1.style.backgroundColor = "white";
                bar2.style.backgroundColor = "white";

                j -= gap;
            }
            const gap3 = document.getElementById(`${j}`);
            gap3.style.backgroundColor = "purple";

            array[j] = temp;

            update(array);
            gap3.style.backgroundColor = "blue";
            gap1.style.backgroundColor = "purple";

            await sleep(speed);

            gap1.style.border = "";
            gap1.style.backgroundColor = "white";
            gap2.style.backgroundColor = "white";
            gap3.style.backgroundColor = "white";
            gap2.style.border = "";
        }
    }
}
