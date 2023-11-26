var calculate = (x) => {
    var num = Math.floor(x/3)-2;
    return num <= 0 ? 0 : num+calculate(num);
}
var answer = ``.split("\n").map(Number).map(x => calculate(x)).reduce((a, b) => a+b);
console.log(answer);