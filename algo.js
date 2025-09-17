function bubble(arr) {
    for (let i = 0; i < arr.size; i++) {
        let swapped = false;
        for (let j = 0; j < arr.size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

function insertion(arr) {}

function selection(arr) {}

function quick(arr) {}

function shell(arr) {}
