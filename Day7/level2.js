//1
//instruction unclear : finding slope
function solveLinEquation(a,b,c){
  let x = [1,2]
  let y = [c-a*x[0]/b , c-a*x[1]/b]
  let slope = (y[1]-y[0])/(x[1]-x[0])
  return slope
}
console.log(solveLinEquation(2,-3,4))
//2
function solveQuadratic(a=0,b=0,c=0){
    let quard_val1 = (-b+Math.sqrt(b**2 - 4 * a *c))/2*a
    let quard_val2 = (-b-Math.sqrt(b**2 - 4 * a *c))/2*a
    let quard_val = (quard_val1==quard_val2)
        ?[quard_val1]
        :[quard_val1,quard_val2]
    return quard_val
}
console.log(solveQuadratic(1,4,4) , solveQuadratic())
//3
function printArray(arr){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
    }
}
let arr = [5,4,3,2,1]
printArray(arr)
//4
function showDateTime(){
    function addZero(n){
        return n<10?'0'+n:n
    }
    let now = new Date()
    let dd = addZero(now.getDate())
    let mm = addZero(now.getMonth()+1)
    let yyyy = now.getFullYear()
    let min = addZero(now.getMinutes())
    let hour = addZero(now.getHours())
    let s = `${dd}/${mm}/${yyyy} ${hour}:${min}`
    console.log(s)
}
showDateTime()
//5
function swapValue(x,y){
    return [y,x]
}
console.log(swapValue(2,4))
//6
function reverseArray(arr){
    let reversed_arr = []
    for (let i = arr.length-1; i >=0 ; i--) {
        const element = arr[i];
        reversed_arr.push(element)
    }
    return reversed_arr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//7
function capitalizeArray(arr){
    let capitalizedarray = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        element = element.toUpperCase()
        capitalizedarray.push(element)
    }
    return capitalizedarray
}
console.log(capitalizeArray(["hi","hello"]))
//8
function addItem(...args){
    return args
}
let exArr = addItem("banana","apple","orange")
console.log(exArr)

//9
function  removeItem(arr,index){
    arr.splice(index,1)
    return arr
}
exArr = removeItem(exArr,1)
console.log(exArr)
//10
function sumOfNumbers(n){
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum+i   
    }
    return sum
}
console.log(sumOfNumbers(100))
//11
function sumOfOdds(n){
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if(i%2!=0){
            sum = sum+i   
        }
    }
    return sum
}
console.log(sumOfOdds(100))
//12
function sumOfEvens(n){
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if(i%2==0){
            sum = sum+i   
        }
    }
    return sum
}
console.log(sumOfEvens(100))
//13
const evensAndOdds = n =>{
    let nEven = 0
    let nOod = 0
    for (let i = 0; i <= n; i++) {
        if(i%2==0){
            nEven ++  
        }else{
            nOod ++
        }
    }
    let log = `The number of odds are ${nOod}\n\
The number of evens are ${nEven}.`
    console.log(log)
}
evensAndOdds(100)
//14
 export default function sum(...args){
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        sum+=element
    }
    return sum
}
console.log(sum(1,2,3,4,5,))
//15

function randomUserIp(){
    const randomByte = () =>{return Math.round(Math.random()*255) }
    let userIP = `${randomByte()}.${randomByte()}.${randomByte()}.${randomByte()}`
    return userIP
}
console.log(randomUserIp())

//16
function randomMacAddress(){
    const randomByteHex = () =>{
        let rByte= Math.round(Math.random()*255) 
        return parseHex(rByte)
    }
    const parseHex = (n) =>{
        return n.toString(16).toUpperCase()
    }

    let userIP = `${randomByteHex()}.${randomByteHex()}.${randomByteHex()}.${randomByteHex()}`
    return userIP
}
console.log(randomMacAddress())
//17

function randomHexaNumberGenerator(){
    const randomNum = () =>{
        return Math.round(Math.random()*10000000) 
       
    }
    const parseHex = (n) =>{
        return n.toString(16)
    }
    return `#${parseHex(randomNum())}`
}
console.log(randomHexaNumberGenerator())
//18
function userIdGenerator(){
    const randomNum = () =>{
        return Math.round(Math.random()*10000000) 
       
    }
    const makeString = (n) =>{
        return n.toString(36).toUpperCase()
    }
    return `#${makeString(randomNum())}`
}
console.log(userIdGenerator())

