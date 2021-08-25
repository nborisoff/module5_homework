let map = new Map([
    ["Toyota", "Japan"],
    ["Audi", "Germany"],
    ["Ford", "USA"]
]);

for (let [key, value] of map) {
    console.log(`Ключ - ${key}, значение - ${value}`);
}