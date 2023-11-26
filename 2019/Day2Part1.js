var run = (arr) => {
    var i = 0;
    for (var i = 0; i < arr.length;){
        if (arr[i] == 99) break;
        if (arr[i] == 1) arr[arr[i+3]] = arr[arr[i+1]]+arr[arr[i+2]];
        if (arr[i] == 2) arr[arr[i+3]] = arr[arr[i+1]]*arr[arr[i+2]];
        i += 4;
    }
    return arr[0];
}
var answer = ``.split(",").map(Number);
answer[1] = 12; answer[2] = 2;
console.log(run(answer));