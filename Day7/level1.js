//1
function fullName(){
    const fullName = "Nakin R"
    console.log(fullName)
}
fullName()
//2
function fullName2(firstname , lastname){
    const fullName = `${firstname}  ${lastname}`
    console.log(fullName)
}
fullName2("Nakinton","Rungrueng")
//3
function addNumbers(num1, num2){
    let sum = num1+num2
    return sum
}
console.log(addNumbers(3,5))
//4
function areaOfRectangle(width,height){
    let area = width*height
    return area
}
console.log(areaOfRectangle(3,5))
//5
function perimeterOfRectangle(width,height){
    let perimeter = 2*(width+height)
    return perimeter
}
console.log(perimeterOfRectangle(3,5))
//6
function volumeOfRectPrism(width,length,height){
    let volume = width*length*height
    return volume
}
console.log(volumeOfRectPrism(3,5,10))
//7
function areaOfCircle(r){
    let area = Math.PI*r*r
    return area
}
console.log(areaOfCircle(7))
//8
function circumOfCircle(r){
    let circumfrence = 2*Math.PI*r
    return circumfrence
}
console.log(circumOfCircle(7))
//9
function density(mass,vol){
    let density = mass/vol
    return density
}
console.log(density(3,5))
//10
function speed(distance,time){
    let spd = density/time
    return spd
}
console.log(speed(3,5))
//11
function weight(mass,g="9.81"){
    let w = mass*g
    return w
}
console.log(weight(3))
//12
function convertCelsiusToFahrenheit(oC){
    let oF = (oC*9/5)+32
    return oF
}
console.log(convertCelsiusToFahrenheit(100))
//13
// weight in kg , height in m
function BMI(weight,height){
    let bmi = weight/(height*height)
    let status
    switch (bmi) {
        case bmi<18.5:
            status = "Underweight"
            break;
        case bmi<=24.9:
            status = "Normal weight"
            break;
        case bmi<=29.9:
            status = "Overweight"
            break;
        default:
            status = "Obese"
            break;
    }
    return `BMI = ${bmi} ${status}`
}
console.log(BMI(58,1.58))
//14
function checkSeason(month){
    let season = ["Autumn", "Winter", "Spring", "Summer"]
switch (month) {
    case "September":
    case "October":
    case "November":
        season = season[0]
        break;
    case "January":
    case "February":
    case "December":
        season = season[1]
        break;
    case "March":
    case "April":
    case "May":
        season = season[2]
        break;
    case "June":
    case "July":
    case "August":
        season = season[3]
        break;
    default:
        season = "Your mind"
        break;
}
    return season
}
console.log(checkSeason("January"))
//15
function findMax(num1,num2,num3){
    let max
    if(num2>num3){
        max=num2
    }else{
        max = num3
    }
    if(num1>max){
        max = num1
    }
    return max
}
console.log(findMax(5,10,15))