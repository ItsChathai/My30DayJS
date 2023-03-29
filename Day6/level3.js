//1
import { countries } from "./level1.js"
let Countries = countries.slice(0)
Countries.push("United State of America")
console.log(Countries)
//2
const sortedCountries = Countries.slice(0).sort()
console.log(sortedCountries)
//3
import { webTechs } from "./level1.js"
import { mernStack } from "./level2.js"
const sortedWebTechs = webTechs.slice(0).sort()
console.log(sortedWebTechs)
const sortedMern = mernStack.slice(0).sort()
console.log(sortedMern)
//4
console.log(Countries)
let key = "land"
const countriesLand = []
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].includes(key)) {
        countriesLand.push(countries[i])
        Countries.splice(i,1)
    }
}

console.log(countriesLand)
console.log(Countries)
//5
let longestCountry = ""
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].length > longestCountry.length) {
        longestCountry = Countries[i]
    }
}
Countries.splice(Countries.indexOf(longestCountry),1)
console.log(`longest country = ${longestCountry}`)
console.log(`Country = ${Countries}`)
//6
'same as 4'
//7
let shortLen = 4
let shortCountry =[]
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].length < shortLen) {
        shortCountry.push(Countries[i])
        Countries.splice(i,1)
    }
}
console.log(`short country = ${shortCountry}`)
console.log(`Country = ${Countries}`)
//8
let twoOrMoreWord =[]
for (let i = 0; i < Countries.length; i++) {
    if (Countries[i].split(" ").length > 1) {
        twoOrMoreWord.push(Countries[i])
        Countries.splice(i,1)
    }
}
console.log(`country with more than one word = ${twoOrMoreWord}`)
console.log(`Country = ${Countries}`)
//9
let temp_countries = Countries.slice(0)
for (let i = 0; i < Countries.length; i++) {
    Countries[i] = temp_countries[(i + 1) % 4]
}
console.log(Countries)