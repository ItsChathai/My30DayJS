import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let patternA = /,.'/g
text.replace(patternA,"")
let words = text.split(" ")
console.log(words)
console.log(words.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(`shoppingCart = ${shoppingCart}`)
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
console.log(`shoppingCart = ${shoppingCart}`)
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}
console.log(`shoppingCart = ${shoppingCart}`)

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(`shoppingCart = ${shoppingCart}`)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(`shoppingCart = ${shoppingCart}`)
//4
countries.includes('Ethiopia')
    ?console.log('Ethiopia'.toUpperCase())
    :countries.push('Ethiopia')
    ;
//5
webTechs.includes('Sass')
    ?console.log('Sass is a CSS preprocess')
    :webTechs.push('Sass')
    console.log(webTechs)
    ;
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


