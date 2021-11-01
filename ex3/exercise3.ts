
function getValidList(): number[] {
    let input: any; 
    let numbers: number[] = [];

    input = window.prompt("It'll be executed until a non-number appears");
    while(!isNaN(input)) {
        numbers.push(+input);
        input = prompt();
    }
    return numbers;
}

function returnGreatestValue(list: number[]): number{
    return Math.max.apply(null, list);
}

function returnSmallestValue(list: number[]): number{
    return Math.min.apply(null, list);
}

function returnAverageValue(list: number[]): number{
    let sum: number = 0;
    list.forEach(number => {
        sum += number;
    });
    return sum/list.length;
}
const validNumbers: number[] = getValidList();

console.log(returnSmallestValue(validNumbers));
console.log(returnGreatestValue(validNumbers));
console.log(returnAverageValue(validNumbers));

//Demonstrate all functions with the functional paradigm
const returnGreatestValueFunc = (list: number[]): number => {
    return Math.max.apply(null, list);
};

const returnSmallestValueFunc = (list: number[]): number => {
    return Math.max.apply(null, list);
};

const sumAll = (previousNumber: number, nextNumber: number): number => previousNumber + nextNumber;
const returnAverageValueFunc = (list: number[]): number => {
   return list.reduce(sumAll) / list.length;
};

//Demonstrate all functions with the imperative paradigm
function returnGreatestValueImp(list: number[]): number {
    let greatest: number = list[0];

    for (let i = 0; i < list.length; i ++) {
       if(list[i] >= greatest){
           greatest = list[i];
       }
    }
    return greatest;
}

function returnSmallestValueImp(list: number[]): number {
    let smallest: number = list[0];

    for (let i = 0; i < list.length; i ++) {
       if(list[i] <= smallest){
           smallest = list[i];
       }
    }
    return smallest;
}

function returnAverageValueImp(list: number[]): number {
    let sum: number = 0;
    let average: number;

    for(let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    average = sum / list.length;
    return average;
}