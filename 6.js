let arr = [1, 1, 1, 1, 1, 1, 1];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
        if (i == arr.length-1) {
            console.log(true);
        }
    } else {
        console.log(false);
        break;
    }
}