function getValidList() {
    var input;
    var numbers = [];
    input = window.prompt("It'll be executed until a non-number appears");
    while (!isNaN(input)) {
        numbers.push(+input);
        input = prompt();
    }
    return numbers;
}
function returnGreatestValue(list) {
    return Math.max.apply(null, list);
}
function returnSmallestValue(list) {
    return Math.min.apply(null, list);
}
function returnAverageValue(list) {
    var sum = 0;
    list.forEach(function (number) {
        sum += number;
    });
    return sum / list.length;
}
var validNumbers = getValidList();
console.log(returnSmallestValue(validNumbers));
console.log(returnGreatestValue(validNumbers));
console.log(returnAverageValue(validNumbers));
//Demonstrate all functions with the functional paradigm
var returnGreatestValueFunc = function (list) {
    return Math.max.apply(null, list);
};
var returnSmallestValueFunc = function (list) {
    return Math.max.apply(null, list);
};
var sumAll = function (previousNumber, nextNumber) { return previousNumber + nextNumber; };
var returnAverageValueFunc = function (list) {
    return list.reduce(sumAll) / list.length;
};
//Demonstrate all functions with the imperative paradigm
function returnGreatestValueImp(list) {
    var greatest = list[0];
    for (var i = 0; i < list.length; i++) {
        if (list[i] >= greatest) {
            greatest = list[i];
        }
    }
    return greatest;
}
function returnSmallestValueImp(list) {
    var smallest = list[0];
    for (var i = 0; i < list.length; i++) {
        if (list[i] <= smallest) {
            smallest = list[i];
        }
    }
    return smallest;
}
function returnAverageValueImp(list) {
    var sum = 0;
    var average;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    average = sum / list.length;
    return average;
}
