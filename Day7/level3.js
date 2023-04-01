//1
function userIdGenerator() {
    let l = 5//window.prompt("number of characters ")
    let n = 5//window.prompt("number of ids ")
    let s = ""
    const randomNum = (range) => {
        return Math.round(Math.random() * range)
    }
    const makeString = (n) => {
        let s = n.toString(36)
        if (Math.round(Math.random())) {
            s = s.toUpperCase()
        }
        return s
    }
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = 0; j < l; j++) {
            temp += makeString(randomNum(36))
        }
        s += temp + '\n'
    }
    return s
}
console.log(userIdGenerator())
//2
function rgbColorGenerator() {
    const randomByte = () => { return Math.round(Math.random() * 255) }
    let rgb = `rgb(${randomByte()},${randomByte()},${randomByte()})`
    return rgb
}
console.log(rgbColorGenerator())
//3
function arrayOfHexaColors() {

    const randomNum = () => {
        return Math.round(Math.random() * 255)
    }
    const makeString = (n) => {
        if (n < 10) {
            return '0' + n
        }
        return n.toString(16)
    }
    return [makeString(randomNum()), makeString(randomNum()), makeString(randomNum())]
}
console.log(arrayOfHexaColors())
//4
function arrayOfRgbColors() {
    const randomByte = () => { return Math.round(Math.random() * 255) }
    let rgb = [randomByte(), randomByte(), randomByte()]
    return rgb
}
console.log(arrayOfRgbColors())
//5
function convertHexaToRgb(hexa) {
    let hex = '0123456789abcdef'
    let sum = 0
    let rgb = []
    hexa = hexa.slice(1, hexa.length)
    for (let i = 0; i < hexa.length - 1; i += 2) {
        let value = (hex.indexOf(hexa[i]) * 16) + (hex.indexOf(hexa[i + 1]))
        rgb.push(value)
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}
console.log(convertHexaToRgb("#ffffff"))
//6
function convertRgbToHexa(rgb_input) {//format rgb(xxx,xxx,xxx)
    let hexa = rgb_input.slice(4, rgb_input.length - 1).split(",")
    for (let i = 0; i < hexa.length; i++) {
        hexa[i] = parseInt(hexa[i]).toString(16);
    }
    return `#${hexa[0]}${hexa[1]}${hexa[2]}`
}
console.log(convertRgbToHexa("rgb(255,255,255)"))
//7
function generateColors(type, n = 1) {
    let output = []
    if (type == 'rgb') {
        for (let i = 0; i < n; i++) {
            output.push(rgbColorGenerator())
        }
    } else if (type == 'hexa') {
        for (let i = 0; i < n; i++) {
            output.push(convertRgbToHexa(rgbColorGenerator()))
        }
    } else if (type == undefined) {
        return `missing type : "rgb" or "hexa" `
    } else {
        return `${type} is not a prefered type.`
    }
    return output.length == 1 ? output[0] : output;
}
console.log(generateColors("rgb"))
console.log(generateColors('hexa'))
//8
function shuffleArray(input_arr) {
    let arr = input_arr
    let randomNum = (n) => {
        return Math.round(Math.random() * n)
    }
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        j = randomNum(i)
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr;
}
console.log(shuffleArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
//9
function factorial(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= i; j++) {
            sum *= j
        }
    }
    return sum
}
console.log(factorial(5))
//10
function isEmpty(a) {
    if (!a) {
        return true
    } else if (a.length == 0) {
        return true
    } else {
        return false
    }
}
let a = []
console.log(isEmpty(a))
//11
import sum from "./level2.js"
console.log(sum(1, 2, 3, 4))
//12
function sumOfArrayItems(arr) {
    let allNumber = true
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof element != "number") {
            allNumber = false
        }
    }
    if (allNumber) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            sum += element
        }
        return sum
    } else {
        return `input is not an number array`
    }
}
console.log(sumOfArrayItems([0, 1, 2, 3, "s"]))
console.log(sumOfArrayItems([0, 1, 2, 3, 4]))
//13
function average(arr) {
    let sum = sumOfArrayItems(arr)
    if (typeof sum == "number") {
        let average = sum / arr.length
        return average
    } else {
        return sum
    }
}
console.log(average([3, 3, 3, 3, 3]))
//14
function modifyArray(arr, n = 5) {
    n = n - 1
    if (arr.length < 5) {
        return `item not found`
    } else {
        arr[n] = arr[n].toUpperCase()
        return arr
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
//15
function isPrime(n) {
    let prime = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false
        }
    }
    return prime
}
console.log(isPrime(51))
//16
function isUnique(array) {
    let unique = true
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                unique = false
            }
        }
    }
    return unique
}
console.log(isUnique(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
//17
function isSameDatatype(array) {
    let sameDatatype = true
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (typeof array[i] != typeof array[j]) {
                sameDatatype = false
            }
        }
    }
    return sameDatatype
}
console.log(isSameDatatype([6, 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
//18
function isValidVariable(str) {
    // A valid variable name must start with a letter, underscore, or dollar sign
    if (/^[a-zA-Z$_]/.test(str)) {
        // The rest of the variable name can contain letters, numbers, underscores, or dollar signs
        if (/^[a-zA-Z$_][a-zA-Z0-9$_]*$/.test(str)) {
            return true;
        }
    }
    return false;
}//i don't understand regular expression
console.log(isValidVariable("$gg"))
//19
function sevenRandomNumbers(n = 9) {
    let randomnum = () => { return Math.round(Math.random() * n) }
    let arr = []
    arr.push(randomnum())
    while (arr.length < 7) {
        let unique = true
        let ran = randomnum()
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(ran == element){
                unique = false
            }
        }
        if(unique){
            arr.push(ran)
        }
    }
    return arr
}
console.log(sevenRandomNumbers())
//20
const countries = [
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
function reverseCountries(countries){
    let revCountries = countries.slice(0)
    return revCountries.reverse()
}
console.log(reverseCountries(countries))