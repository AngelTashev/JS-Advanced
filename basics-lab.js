function ex1(a, b, c) {

    let aLen = a.length;
    let bLen = b.length;
    let cLen = c.length;

    let sumLength = aLen + bLen + cLen;
    let avgLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(avgLength);
}

ex1('chocolate', 'ice cream', 'cake');

console.log('**********************')

function ex2(a, b, operator) {
    let result;
    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
    }
    console.log(result);
}

ex2(4, 5, '+');

console.log('**********************');

function ex3(a, b) {
    let result = 0;

    let end = Number(b);

    for(let i = Number(a); i <= end; i++) {
        result += i;
    }

    return result;
}

console.log(ex3(1, 5));

console.log('**********************');

function ex4(a, b, c) {
    let result;

    if (a > b && a > c) {
        result = a;
    } else if (b > a && b > c) {
        result = b;
    } else if (c > a && c > b) {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}

ex4(5, -3, 16);

console.log('**********************');

function ex5(arg) {
    let type = typeof(arg);
    if (type === 'number') {
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

ex5(5);

console.log('**********************');

function ex6(size) {
    for (let r = 0; r < size; r++) {
        console.log('* '.repeat(size));
    }
}

ex6(5);

console.log('**********************');

function ex7(day) {

    let num;

    if (day === 'Monday') {
        num = 1
    } else if (day === 'Tuesday') {
        num = 2
    } else if (day === 'Wednesday') {
        num = 3
    } else if (day === 'Thursday') {
        num = 4
    } else if (day === 'Friday') {
        num = 5
    } else if (day === 'Saturday') {
        num = 6
    } else if (day === 'Sunday') {
        num = 7
    }

    if (typeof(num) !== 'undefined') {
        console.log(num);
    } else {
        console.log('error')
    }
}

ex7('Monday');

console.log('**********************');

function ex8(arr) {

    // Sum(a)
    let sumOfArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
    }
    console.log(sumOfArr);

    // Sum(1/a)
    let sumOfArrBy1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfArrBy1 += 1 / arr[i];
    }
    console.log(sumOfArrBy1);

    // Concat(a)
    let stringOfArr = '';
    for (let i = 0; i < arr.length; i++) {
        stringOfArr += arr[i];
    }
    console.log(stringOfArr);
}

ex8([1, 2, 3]);

console.log('**********************');

function ex9(str) {

    let regex = new RegExp('[A-Za-z0-9]+', 'g')
    let words = str.match(regex);

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }

    console.log(words.join(', '));
}

ex9('Hello, how are you.e. hey?');