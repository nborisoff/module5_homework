let arr = [1, 2, 3, 4 ,5 ,6 ,7];

console.log(`Количество элементов: ${arr.length}`);
arr.map(function(item, index, array) {
    console.log(item);
});