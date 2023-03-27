//1
let firstName = "Nate"
let lastName = "R"
let country = "Thailand"
let city = "Ratcchaburi"
let age = 20
let isMarried = false
let year = 2020
console.log(`First Name: ${firstName} (${typeof firstName})`)
console.log(`Last Name: ${lastName} (${typeof lastName})`)
console.log(`Country: ${country} (${typeof country})`)
console.log(`City: ${city} (${typeof city})`)
console.log(`Age: ${age} (${typeof age})`)
console.log(`Married: ${isMarried} (${typeof isMarried})`)
console.log(`Year: ${year} (${typeof year})`)
//2
console.log("10 is ",typeof 10 , "'10' is",typeof '10',typeof 10 == typeof '10')
//3
console.log("parseInt('9.8') is equal to 10",parseInt(9.8)==10)
//4
console.log(3>2)
console.log(3<2)
//5
console.log(`
4 > 3   (${4>3})
4 >= 3  (${4>=3})
4 < 3   (${4<3})
4 <= 3  (${4<=3})
4 == 4  (${4==4})
4 === 4 (${4===4})
4 != 4  (${4!=4})
4 !== 4 (${4!==4})
4 != '4'(${4!='4'})
4 == '4'(${4=='4'})
4 === '4'(${4==='4'})
pyhton.length > jargon.length  (${'pyhton'.length > 'jargon'.length })
`)
//6
console.log(4 > 3 && 10 < 12)  // true
console.log(4 > 3 && 10 > 12)  // false
console.log(4 > 3 || 10 < 12)  // true
console.log(4 > 3 || 10 > 12)  // true
console.log(!(4 > 3))         // false
console.log(!(4 < 3))         // true
console.log(!(false))         // true
console.log(!(4 > 3 && 10 < 12))  // false
console.log(!(4 > 3 && 10 > 12))  // true
console.log(!(4 === '4'))     // true
console.log(`There is no 'on' in both dragon and python: ${!('dragon'.includes('on') || 'python'.includes('on'))}`)  // true
//7
const TODAY = new Date()
console.log("year today: ",TODAY.getFullYear())
console.log("month today: ",TODAY.getMonth())
console.log("date today: ",TODAY.getDate())
console.log("day today: ",TODAY.getDay())
console.log("hour today: ",TODAY.getHours())
console.log("minute today: ",TODAY.getMinutes())
console.log("second today: ",TODAY.getSeconds())
console.log("unix time: ",TODAY.getTime())