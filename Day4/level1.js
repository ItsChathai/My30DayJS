/*
//1
const LEGAL_AGE = 18
let age = window.prompt("Enter your age: ")
let log =""
    if(age<LEGAL_AGE){
        log =  `You are left with ${LEGAL_AGE-age} years to drive.`
    }else{
        log = "You are old enough to drive."
    }
window.alert(log)

//2
let myAge = 25
let yourAge = window.prompt("Enter your age: ")
let oy = ["older","younger"]
let diff
if(myAge>yourAge){
    diff = myAge-yourAge
    oy = oy[1]
}else{
    diff = yourAge - myAge
    oy = oy[0]
}
let log = `You are ${diff} years ${oy} than me.`
window.alert(log)

//3
let log
let a = 4
let b = 3
if(a>b){
    log = 'a is greater than b'
}else{
    log = 'a is less than b'
}
window.alert(log)
a>b
    ?log = 'a is greater than b'
    :log = 'a is less than b'
;
window.alert(log)

//4
let s
let num = window.prompt("Enter a number: ")
num%2==0
    ?s = ' is an even number.'
    :s =  ' is an odd number.'
window.alert(num + s)
*/