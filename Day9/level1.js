function print(n) {
    console.log(n)
}


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//1
/*
    forEach : iriterate through ever element in an array
    arr.forEach()
    map : create modified version of array
    filter : create new array only consist of element that passed the condition
    reduce : a forEach with accumulator
*/
//2
const callback = (n) => {
    console.log(n);
}
//3
countries.forEach(callback)
//4
names.forEach(callback)
//5
numbers.forEach(callback)
//6
const countriesUppercase = countries.map((country) => country.toUpperCase())
print(countriesUppercase)
//7
const countries_length = countries.map((country) => country.length)
print(countries_length)
//8
const numbersSquared = numbers.map((n) => n * n)
print(numbersSquared)
//9
const nameUppercase = names.map((name) => name.toUpperCase())
print(nameUppercase)
//10
const productsPrice = products.map((product) => {
    return [product.product, parseInt(product.price)]
})
print(productsPrice)
//11
const countriesWithLand = countries.filter((country) => country.toLowerCase().includes("land"))
print(countriesWithLand)
//12
const countriesWithSix = countries.filter((country) => country.length == 6)
print(countriesWithSix)
//13
const countriesSix = countries.filter((country) => country.length >= 6)
print(countriesSix)
//14
const countriesStartWithE = countries.filter((country) => country[0] == "E")
print(countriesStartWithE)
//15
const priceWithValue = products.filter((product) => !isNaN(parseInt(product.price)))
print(priceWithValue)
//16
function getStringLists(arr) {
    return arr.filter((element) => typeof element == "string")
}
const list = [5, 9, "hello"]
print(getStringLists(list))
//17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
print(sum)
//18
const sentence = countries.reduce((prev, cur) => {
    if (countries.indexOf(cur) === countries.length - 1) {
        return `${prev}, and ${cur}`;
    } else {
        return `${prev}, ${cur}`;
    }
}) + ` are north European countries.`;
print(sentence)
//19
/*
  some :check if any element are similar in one aspect
  every :check if all element are similar in one aspect
*/
//20
const greaterThanSev = numbers.some((n) => n > 7)
print(greaterThanSev)
//21
const allLand = countries.every((country) => country.includes("land"))
print(allLand)
//22
/*
  find : return first element satisfied condition
  findIndex : return index of first element satisfied condition
*/
//23
const sixLetter = countries.find((country) => country.length == 6)
print(sixLetter)
//24
const sixLetterInd = countries.findIndex((country) => country.length == 6)
print(sixLetterInd)
//25
const NorwayIndex = countries.findIndex((country) => country == "Norway")
print(NorwayIndex)
//26
const RussiaIndex = countries.findIndex((country) => country == "Russia")
print(RussiaIndex)