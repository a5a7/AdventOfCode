var answer = ``.split("\n").map(Number).map(x => (Math.floor(x/3)-2)).reduce((a, b) => a+b);
console.log(answer);