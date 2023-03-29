export const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] 


export const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//1
let s = "";
for (let i = 0; i <= 10; i++) {
    s += ' ' + i;
}
console.log(s)
s = ""
let i = 0
while (i <= 10) {
    s += ' ' + i;
    i++
}
console.log(s)
s = ""
i = 0
do {
    s += ' ' + i;
    i++
} while (i <= 10)
console.log(s)
s = ""
//2
s = "";
for (let i = 10; i >= 0; i--) {
    s += ' ' + i;
}
console.log(s)
s = ""
i = 10
while (i >= 0) {
    s += ' ' + i;
    i--
}
console.log(s)
s = ""
i = 10
do {
    s += ' ' + i;
    i--
} while (i >= 0)
console.log(s)
s = ""
//3
let n = 3;
//n = window.prompt("Enter n :")
for (let i = 0; i <= n; i++) {
    s += ' ' + i;
}
console.log(s)
s = ""
//4
n = 3;
//n = window.prompt("Enter n :")
for (let i = 0; i <= n; i++) {
    s += '#'.repeat(i) + '\n';
}
console.log(s)
s = ""
//5
n = 10;
//n = window.prompt("Enter n :")
for (let i = 0; i <= n; i++) {
    s += `${i} x ${i} = ${i * i}` + '\n';
}
console.log(s)
s = ""
//6
n = 10;
s = `i\ti^2\ti^3\n`
//n = window.prompt("Enter n :")
for (let i = 0; i <= n; i++) {
    s += `${i}\t${i * i}\t${i * i * i}` + '\n';
}
console.log(s)
s = ""
//7
n = 100;
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        s += `${i} `
    }
}
console.log(s)
s = ""
//8
n = 100;
for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
        s += `${i} `
    }
}
console.log(s)
s = ""
//9
let prime_d = ""
n = 100;
for (let i = 3; i <= n; i++) {
    prime_d = ""
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime_d += j
        }
    }
    if (!prime_d) {
        s += `${i} `
    }
}
console.log(s)
s = ""
//10
let sum = 0
let stop = 100;
let start = 0;
for (let i = start; i <= stop; i++) {
    sum += i
}
console.log(`The sum of all numbers from ${start} to ${stop} is ${sum}.`)
//11
start = 0
stop = 100;
let sum_even = 0;
let sum_ood = 0;
for (let i = start; i <= stop; i++) {
    if (i % 2 == 0) {
        sum_even += i;
    } else {
        sum_ood += i;
    }
}
console.log(`The sum of all evens from ${start} to ${stop} is ${sum_even}. And the sum of all odds from ${start} to ${stop} is ${sum_ood}`)
//12
start = 0
stop = 100;
let sumEvenOdd = [0, 0]
for (let i = start; i <= stop; i++) {
    if (i % 2 == 0) {
        sumEvenOdd[0] += i;
    } else {
        sumEvenOdd[1] += i;
    }
}
console.log(sumEvenOdd)
//13
length = 5
const arrA = []
for (let i = 0; i < length; i++) {
    arrA[i] = Math.round(Math.random() * 10)
}
console.log(arrA)
//14
length = 5;
const arrB = [];
for (let i = 0; i < length; i++) {
  let unique = true;
  let randomNum;
  do {
    randomNum = Math.round(Math.random() * 10);
    for (let j = 0; j < i; j++) {
      if (arrB[j] === randomNum) {
        unique = false;
        break;
      }
      unique = true;
    }
  } while (!unique);
  arrB[i] = randomNum;
}

console.log(arrB);
//15
length = 6;
let id = "";
id = `${(Math.random()*Date.now()).toString(36).substring(0,length)}`
console.log(id);