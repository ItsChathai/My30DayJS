//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
let mid = parseInt(ages.length / 2)
let median = ages.length % 2 == 0 ? ages[mid] + ages[mid + 1] / 2
    : ages[mid];
let sum = 0;
for (let i = 0;i<ages.length;i++) {
     sum += ages[i]
}
let average = sum/ages.length
console.log(`min = ${minAge}\nmax=${maxAge}\nmedian = ${median}\naverage = ${average}`)
console.log(`min-avg = ${Math.abs(minAge-average)} max-avg = ${Math.abs(maxAge-average)} `)
//2
import {countries} from "./countries.js"
countries.slice(0,9)
mid = parseInt(countries.length / 2)
let midCountry = countries.length % 2 == 0 ? countries[mid] + " , " + countries[mid + 1] 
    : countries[mid];
console.log(midCountry)
//3
const firsthalf = countries.slice(0,mid+1)
const secondhalf = countries.slice(mid,countries.length)
console.log(firsthalf)
console.log(secondhalf)