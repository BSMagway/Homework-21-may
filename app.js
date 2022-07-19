//Task 01 Test
let testArrayTask01 = [123, 112, 124, 345, 223, 333, 344, 456];
console.log(`Test array: ${testArrayTask01}`);
viewNumberWthDifferentDigits(testArrayTask01);

//Task 02 Test
let testArrayTask02 = [2, 3, -3, -4, 5, 6, -6];
console.log(`Without 0: ${testArrayTask02}`);
negativeZeroInsert(testArrayTask02);
console.log(`With 0: ${testArrayTask02}`);

//Task 03 Test
let testArrayTask03 = [8888, 8878, 5678, 8879];
viewNumberWithSumDigits(testArrayTask03, 32);

//Task 04 Test
let testStringTask04Length5 = "abcd3";
console.log(testStringTask04Length5);
viewStringSymbol(testStringTask04Length5);
let testStringTask04Length10 = "abcd3456ui";
console.log(testStringTask04Length10);
viewStringSymbol(testStringTask04Length10);

//Task 05 Test
let money = 1258;
console.log(`In ATM enter: ${money}`);
let moneyFromATM = ATM(money);
viewMoney(moneyFromATM);

//Task 06 Test
let testArrayTask06TwoElement = [1, 1, 2, 3, 4, 4, 5, 6];
console.log(testArrayTask06TwoElement)
mostElement(testArrayTask06TwoElement);
let testArrayTask06OneElement = [1, 1, 2, 3, 4, 4, 4, 5, 6];
console.log(testArrayTask06OneElement)
mostElement(testArrayTask06OneElement);

//Task 07 Test
let arrayTask07 = getRandomArrayPositiveNegative();
console.log('Random array with 5 negative and 5 positive:');
console.log(arrayTask07);

//Task 08 Test
let testArrayTest08 = getRandomArray(10, 1, 100);
searchTwoNumber(testArrayTest08, 25);

//Task 09 Test
let testArrayOneTask09 = [50, 2, 1, 6];
let testArrayTwoTask09 = [2, 3, 1, 1, 1, 4, 5, 6];

arrayOneSumTwoArrayTwoSumThree(testArrayOneTask09, testArrayTwoTask09);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Task 01 function
function number3DigitsDifferentOrSame(number) {
    let result = true;
    let firstNumber = number % 10;
    number = parseInt(number / 10);
    let secondNumber = number % 10;
    number = parseInt(number / 10);

    if (firstNumber === secondNumber || firstNumber === number || secondNumber === number) {
        result = false;
    }

    return result;
}

function viewNumberWthDifferentDigits(array) {
    for (let element of array) {
        if (number3DigitsDifferentOrSame(element)) {
            console.log(`Number with all three different digits: ${element}`);
        }
    }
}

//Task 02 function
function negativeZeroInsert(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array.splice(++i, 0, 0);
        }
    }
}

//Task 03 function
function sumDigitsInNumber(number) {
    let result = 0;
    while (number != 0) {
        result += number % 10;
        number = parseInt(number / 10);
    }

    return result;
}

function viewNumberWithSumDigits(array, sum) {
    for (let element of array) {
        if (sumDigitsInNumber(element) === sum) {
            console.log(`Number ${element} with sum digits ${sum}`);
        }
    }
}

//Task 04 function
function viewStringSymbol(string) {
    if (string.length > 5) {
        for (let i = 0; i < string.length; i++) {
            if (i < 3 || (string.length - i) < 4) {
                console.log(`Symbol ${i}: ${string[i]}`);
            }
        }
    }
    else {
        for (let i = 0; i < string.length; i++) {
            console.log(`Symbol 0: ${string[0]}`);
        }
    }
}

//Task 05 function
function ATM(money) {
    let result = [];
    if (money % 100 != 0) {
        result.push(parseInt(money / 100));
        money = money % 100;
    }
    else {
        result.push(0);
    }

    if (money % 50 != 0) {
        result.push(parseInt(money / 50));
        money = money % 50;
    }
    else {
        result.push(0);
    }

    if (money % 20 != 0) {
        result.push(parseInt(money / 20));
        money = money % 20;
    }
    else {
        result.push(0);
    }

    if (money % 10 != 0) {
        result.push(parseInt(money / 10));
        money = money % 10;
    }
    else {
        result.push(0);
    }

    if (money % 5 != 0) {
        result.push(parseInt(money / 5));
        money = money % 5;
    }
    else {
        result.push(0);
    }

    if (money % 2 != 0 || money != 0) {
        result.push(parseInt(money / 2));
        money = money % 2;
    }
    else {
        result.push(0);
    }

    result.push(money);

    return result;  
}

function viewMoney(arrayATM) {
    console.log('ATM give: ');
    console.log(`100: ${arrayATM[0]}`);
    console.log(`50: ${arrayATM[1]}`);
    console.log(`20: ${arrayATM[2]}`);
    console.log(`10: ${arrayATM[3]}`);
    console.log(`5: ${arrayATM[4]}`);
    console.log(`2: ${arrayATM[5]}`);
    console.log(`1: ${arrayATM[6]}`);
}

//Task 06 function
function mostElement(array) {
    let cloneArray = array.slice();
    let arrayFilter = [];
    while (cloneArray.length > 0) {
        arrayFilter.push(cloneArray.filter(item => item == cloneArray[0]));
        let elementDelete = cloneArray[0];
        for (let i = 0; i <= cloneArray.length; i++) {
            if (cloneArray[i] === elementDelete) {
                cloneArray.splice(i, 1);
                i--;
            }
        }
    }

    let mostLength = mostLengthElementArray(arrayFilter);

    for (let element of arrayFilter) {
        if (mostLength == element.length) {
            console.log(`Most common number: ${element[0]} in array: ${array}`);
        }
    }
}

function mostLengthElementArray(array) {
    let mostLength = 0;
    for (let element of array) {
        if (element.length > mostLength) {
            mostLength = element.length;
        }
    }

    return mostLength;
}

//Task 07 function
function getRandomArrayPositiveNegative() {
    let countPositive = 0;
    let countNegative = 0;
    let resultArray = [];

    while (resultArray.length != 10) {
        if (countPositive < 5 && countNegative < 5) {
            let random = Math.random();
            let randomNumber = getRandomIntInclusive(1, 100);
            randomNumber = random > 0.5 ? -randomNumber : randomNumber;
            resultArray.push(randomNumber)
            randomNumber > 0 ? countPositive++ : countNegative++;
        } else if (countPositive == 5) {
            resultArray.push(-getRandomIntInclusive(1, 100));   
        } else {
            resultArray.push(getRandomIntInclusive(1, 100));
        }
    }

    return resultArray;
}


//Task 08 function
function getRandomArray(length, min, max) {

    let resultArray = [];

    for (let i = 0; i < length; i++) {

            resultArray.push(getRandomIntInclusive(min, max));
    }

    return resultArray;
}

function searchTwoNumber(array, number) {
    let indexNumberOne = 0;
    let indexNumberTwo = 1;
    let minus = Math.abs(number - (array[indexNumberOne] + array[indexNumberTwo]));

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = (i + 1); j < array.length; j++) {
            let sum = array[i] + array[j];
            if (sum != number && Math.abs(number - sum) < minus ) {
                indexNumberOne = i;
                indexNumberTwo = j;
                minus = Math.abs(number - sum);
            }
        }
    }

    console.log(`Closest to ${number} sum two numbers in array ${array}: ${array[indexNumberOne]} and ${array[indexNumberTwo]}`);
}

//Task 09 function
function arrayOneSumTwoArrayTwoSumThree(arrayOne, arrayTwo) {
    let resultNotFind = true;
    console.log(`Arrays for comparison: ${arrayOne} and ${arrayTwo}`);

    main: for (let i = 0; i < arrayOne.length - 1; i++) {
        for (let j = (i + 1); j < arrayOne.length; j++) {
            let sumOne = arrayOne[i] + arrayOne[j];
            for (let k = 0; k < arrayTwo.length - 2; k++) {
                for (let p = (k + 1); p < arrayTwo.length-1; p++) {
                    for (let c = (p + 1); c < arrayTwo.length; c++) {
                        let sumTwo = arrayTwo[k] + arrayTwo[p] + arrayTwo[c];

                        if (sumOne === sumTwo) {
                            resultNotFind = false;

                            console.log(`Numbers in first array one: ${arrayOne[i]} + two: ${arrayOne[j]} = numbers in second array one: ${arrayTwo[k]} + two: ${arrayTwo[p]} + three: ${arrayTwo[c]}`);

                            break main;
                        }

                    }                      
                }
            }

            
        }
    }

    if (resultNotFind) {
        console.log('result not find');
    }
}

