function print(n) {
    console.log(n)
}
/*
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
*/
//1
let totalPrice = products.map((product) => { return parseInt(product.price) }).filter((product) => { return !isNaN(product) }).reduce((sum, current) => sum += current, 0)
print(totalPrice)
//2
let sumPrice = products.reduce((sum, current) => {
    let price = parseInt(current.price)
    if (isNaN(price)) {
        return sum += 0;
    } else {
        return sum += price;
    }
}, 0)
print(sumPrice);
//3
import { countries } from "./countries.js"
const categorizeCountries = (countries) => {
    let catagorized = {
        land: countries.filter((country) => country.toLowerCase().includes("land")),
        ia: countries.filter((country) => country.toLowerCase().includes("ia")),
        island: countries.filter((country) => country.toLowerCase().includes("island")),
        stan: countries.filter((country) => country.toLowerCase().includes("stan"))
    }
    return catagorized;
}
print(categorizeCountries(countries))
//4
function countLettersInCountryNames() {
    const letterCounts = {};
    for (const country of countries) {
        const firstLetter = country[0].toUpperCase();
        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    }
    console.log(letterCounts)
    const result = [];
    for (const letter in letterCounts) {
        result.push({ letter, count: letterCounts[letter] });
    }
    return result;
}
print(countLettersInCountryNames())
//5
function getFirstTenCountries() {
    const result = []
    for (let i = 0; i < 10; i++) {
        result.push(countries[i])
    }
    return result
}
print(getFirstTenCountries())
//6
function getLastTenCountries() {
    const result = []
    for (let i = countries.length - 10; i < countries.length - 1; i++) {
        result.push(countries[i])
    }
    return result
}
print(getLastTenCountries())
//7
function manyUsedLetter(countries) {
    const manyUsed = {}
    for (const country of countries) {
        let first_letter = country[0].toUpperCase()
        if (manyUsed[first_letter]) {
            manyUsed[first_letter].push(country);
        } else {
            manyUsed[first_letter] = [country];
        }
    }
    const result = []
    print(manyUsed)
    for (const letter in manyUsed) {
        if (manyUsed[letter].length > 1){
            result.push({[letter]:manyUsed[letter]})
        }
   }
   return result;
}
print(manyUsedLetter(countries))
