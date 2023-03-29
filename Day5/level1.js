//1
const emptyArr = []
//2 
const secondArr = [1, 2, 3, 4, 5]
//3
let arrLen = secondArr.length;
//4
let firstItem = secondArr[0]
let secondItem = secondArr[2]
let thirdItem = secondArr[4]
//5
const mixedDataTypes = [1, "hi", true, null, undefined]
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log("IT companies : " + itCompanies)
//8
console.log(`Total : ${itCompanies.length} companies`)
//9
console.log(`First company: ${itCompanies[0]} \nSecond company: ${itCompanies[parseInt(itCompanies.length / 2)]} \nLast company: ${itCompanies[itCompanies.length - 1]} `)
//10
console.log(`IT companys: ${itCompanies}`)
//11
const uppercaseCompanies = itCompanies.slice(0)
uppercaseCompanies[0] = uppercaseCompanies[0].toUpperCase()
uppercaseCompanies[1] = uppercaseCompanies[1].toUpperCase()
uppercaseCompanies[2] = uppercaseCompanies[2].toUpperCase()
uppercaseCompanies[3] = uppercaseCompanies[3].toUpperCase()
uppercaseCompanies[4] = uppercaseCompanies[4].toUpperCase()
uppercaseCompanies[5] = uppercaseCompanies[5].toUpperCase()
uppercaseCompanies[6] = uppercaseCompanies[6].toUpperCase()
console.log(`Uppercase IT companys: ${uppercaseCompanies}`)
//12
console.log(`${itCompanies} are big IT companies`)
//13
let checkCompany// = window.prompt("Enter a company: ")
if (itCompanies.includes(checkCompany)){
    console.log(checkCompany)
}else{
    console.log("Not Found")
}
//14
let count
key='o'
const itCompaniesWithoutOO = [];
for (let i = 0; i < itCompanies.length; i++) {
    if(!itCompanies[i].includes(key)){
        itCompaniesWithoutOO.push(itCompanies[i])
    }else{
        count = 0
        for(let j=0;j<itCompanies[i].length;j++){
            if(itCompanies[i][j]==key){
                count++
            }
        } if (count<2){
            itCompaniesWithoutOO.push(itCompanies[i])
            }
    }
}
console.log(`IT company without 'o' more than one : ${itCompaniesWithoutOO}`)
//15
console.log(itCompaniesWithoutOO.sort())
//16
console.log(itCompaniesWithoutOO.reverse())
//17
console.log(itCompaniesWithoutOO.slice(0,3))
//18
console.log(itCompaniesWithoutOO.slice(-3))
//19
console.log(itCompanies)
let middle = parseInt(itCompanies.length/2)
let middleCompany
itCompanies.length%2==0
    ?middleCompany = itCompanies.slice(middle-1,middle+1)
    :middleCompany = itCompanies.slice(middle,middle+1)
console.log(middleCompany)
//20
itCompanies.shift()
console.log(itCompanies)
//21
const middleIndex = parseInt(itCompanies.length / 2);
const numOfCompaniesToRemove = itCompanies.length % 2 == 0 ? 2 : 1; 
itCompanies.splice(middleIndex, numOfCompaniesToRemove)
//22
itCompanies.pop()
console.log(itCompanies)
//23
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)

