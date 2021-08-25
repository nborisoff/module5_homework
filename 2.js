let X = [0, "0", true, undefined];

X = X[Math.floor(Math.random() * X.length)];

switch(typeof(X)) {
    case "number":
        console.log("X - число");
        break;
    case "string":
        console.log("X - строка");
        break;
    case "boolean":
        console.log("X - логический тип");
        break;
    default:
        console.log("Тип X не определен");
}