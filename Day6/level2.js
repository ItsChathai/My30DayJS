//1
let length = parseInt(Math.random() * 100);
let id = "";
id = `${(length * length * Date.now()).toString(36)}`
console.log(id);
//2
let ran = Math.round(Math.random() * 100000)
let hexString = '#' + ran.toString(16)
console.log(hexString);
//3
let rgb = [0, 0, 0]
for (let index = 0; index < rgb.length; index++) {
    ; rgb[index] = Math.round(Math.random() * 255)
}
let s = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
console.log(s)
//4
import { countries } from "./level1.js"
const countriesUpper = []
for (let i = 0; i < countries.length; i++) {
    countriesUpper.push(countries[i].toUpperCase());
}
console.log(countriesUpper)
//5
const countriesLength = []
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}
console.log(countriesLength)
//6
const countriesData = []
for (let i = 0; i < countries.length; i++) {
    let country = countries[i]
    let acronym = countries[i].substring(0, 3).toUpperCase()
    let cLength = countries[i].length
    let data = [country, acronym, cLength]
    countriesData.push(data);
}
console.log(countriesData)
//7
let key = "land"
const countriesLand = []
for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i][0].includes(key)) {
        countriesLand.push(countriesData[i][0])
    }
}
countriesLand != []
    ? console.log(countriesLand)
    : console.log('All these countries are without land');
//8
key = "ia"
const countriesIa = []
for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i][0].includes(key)) {
        countriesIa.push(countriesData[i][0])
    }
}
countriesLand != []
    ? console.log(countriesIa)
    : console.log('These are countries ends without ia');
//9
let longestCountry = ""
for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i][0].length > longestCountry.length) {
        longestCountry = countriesData[i][0]
    }
}
console.log(`longest country = ${longestCountry}`)
//10
let pref_len = 5
const countriesShort = []
for (let i = 0; i < countriesData.length; i++) {
    if (countriesData[i][0].length == pref_len) {
        countriesShort.push(countriesData[i][0])
    }
}
console.log(countriesShort)
//11
import { webTechs } from "./level1.js"
let longestWebTechs = ""
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWebTechs.length) {
        longestWebTechs = webTechs[i]
    }
}
console.log(`longest webTechs = ${longestWebTechs}`)
//12
const webTechsData = []
for (let i = 0; i < webTechs.length; i++) {
    let tech = webTechs[i]
    let tech_len = webTechs[i].length
    let data = [tech, tech_len]
    webTechsData.push(data)
}
console.log(webTechsData)
//13
let acronym = ""
export const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i][0].toUpperCase()
}
console.log(acronym)
//14
const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const lang of arr) {
    console.log(lang)
}
console.log(s)
//15
const fruits = ['banana', 'orange', 'mango', 'lemon']
let temp_fruits = fruits.slice(0)
for (let i = 0; i < fruits.length; i++) {
    fruits[i] = temp_fruits[(i + 1) % 4]
}
console.log(fruits)
//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
s = ""
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        s+=`${fullStack[i][j]}\n`  
    }
}
console.log(s) 
