let arr = [26, true, 1, "2", NaN, 0, undefined, "?", 2, null, "6", 4, false, 9],
odd = 0,
even = 0,
zero = 0;

for (let i = 0; i < arr.length; i++) {
if (typeof(arr[i]) === "number" && !isNaN(arr[i])) {
    if (arr[i] == 0) {
        zero += 1;
    } else if (arr[i] % 2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }
}
}

console.log(`Количество четных элементов в массиве: ${even}\nКоличество нечетных элементов в массиве: ${odd}\nКоличество нулей в массиве: ${zero}`);