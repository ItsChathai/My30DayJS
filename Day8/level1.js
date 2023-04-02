//1
let dog = {}
//2
console.log(dog)
//3
dog = {
    name: 'Ben',
    legs: 2,
    color: 'white',
    age: 2,
    bark: function(){
        return `woof woof`
    }
  /*  getName : function(){
        return `${this.name}`
    },
    getLegs : function(){
        return `${this.legs}`
    },
    getColor : function(){
        return `${this.color}`
    },*/

}
//4
console.log(`dog:\n\
name = ${dog.name}\n\
legs = ${dog.legs}\n\
color = ${dog.color}\n\
age = ${dog.age}\n\
bark: ${dog.bark()}
`)
//5
dog.breed = 'huskey'
dog.getDogInfo = () =>{
    return `\
dog:\n\
name = ${dog.name}\n\
legs = ${dog.legs}\n\
color = ${dog.color}\n\
age = ${dog.age}\n\
bark: ${dog.bark()}
`
}
