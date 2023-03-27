/*
//1
let base = window.prompt("Enter base: ","base goes here")
let height = window.prompt("Enter height:","height goes here")
let triangle_area = 0.5*base*height
window.alert(`The area of triangle is ${triangle_area}`)

//2
let a = parseInt(window.prompt("Enter a:"))
let b = parseInt(window.prompt("Enter b:"))
let c = parseInt(window.prompt("Enter c:"))
let perimeter_triangle = a+b+c
window.alert(`perimeter of triangle ${perimeter_triangle}`)

//3
let rectangle_width = parseInt(window.prompt("Enter width: "))
let rectangle_height = parseInt(window.prompt("Enter Height"))
window.alert(`area : ${rectangle_height*rectangle_width} perimeter: ${2*(rectangle_height+rectangle_width)}`)

//4
const PI = 3.14
let circle_r = parseFloat(window.prompt("Enter width: "))
let circle_area = PI*circle_r**2
let circle_circumference = PI*circle_r*2
//window.alert(`area : ${circle_area} circumference : ${circle_circumference}`)

//5
//y = 2x -2
let x1 = Math.random()*10
let y1 = 2*x1-2
let x2 = Math.random()*100
let y2 = 2*x2-2
let slope1 = (y2-y1)/(x2-x1)
let x_intercept = 2/2
let y_intercept = -2
//window.alert(`slope : ${slope1} x_intercept : ${x_intercept} y_intercept : ${y_intercept}`)

//6
const x = 0
const y = 1
const point1 = [2,2]
const point2 = [6,10]
const slope2 = (point2[y]-point1[y])/(point2[x]-point1[x])
//window.alert(`slope = ${slope2}`)

//7
//window.alert(`slope 1 = ${slope1} , slope 2 = ${slope2}`)

//8
//y = x2 + 6x +  Just math
//9
let hour = parseInt(window.prompt('Enter Hour :'))
let rate = parseInt(window.prompt('Enter Rate :'))
let weekly_pay = hour*rate
window.alert(`Your weekly earning is: ${weekly_pay}`)

//10
let name = window.prompt("Enter your name: ")
let log
name.length>7
    ?log="Your name is long" 
    :log="Your name is short";
window.alert(`${log}`)

//11
let firstname = window.prompt("Enter your firstname: ")
let famName = window.prompt("Enter your familyname: ")
let short_long
firstname.length>famName.length
    ?short_long="longer"
    :short_long="shorter";
let log = `your first name, ${firstname} is ${short_long} than your familyname, ${famName}`
window.alert(`${log}`)

//12
let myAge = window.prompt("Enter your my age: ")
let yourAge = window.prompt("Enter your your age: ")
let differencce = Math.abs(myAge-yourAge)
let od = ["older","younger"]
let log
myAge > yourAge
    ?od = od[0]
    :od = od[1]
log = `i am ${differencce} year/s ${od} than you`
window.alert(log)

//13
const legalAge = 18 
let myAge = window.prompt("Enter your age: ")
let ageStr = `you are ${myAge} `
myAge < legalAge
    ?ageStr += `you will be allowed to drive after ${legalAge - myAge} year/s`
    :ageStr += "you are old enough ot drive"
window.alert(ageStr)


//14
const AGE = 100
let myAge = window.prompt("Enter your age: ")
let second = 365*24*60*60 * (myAge)
window.alert(second)


//15
let time = new Date()
let hour = time.getHours()
let min = time.getMinutes()
let year = time.getFullYear()
let month = time.getMonth()+1
let day = time.getDate()
//I
let formatI = `${year}-${month}-${day} ${hour}:${min} `
//II
let formatII = `${day}-${month}-${year} ${hour}:${min} `
//III
let formatIII = `${year}/${month}/${day} ${hour}:${min} `

window.alert(formatI + formatII + formatIII)
*/
