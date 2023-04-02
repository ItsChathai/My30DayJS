const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
//1
let username = Object.entries(users)
let personWithManySkills = []
console.log(username)

for (let i = 0; i < username.length; i++) {
  let skill = username[i][1].skills
  if (skill.length > 1) {
    personWithManySkills.push(username[i][0])
  }
}
console.log(personWithManySkills)
//2
let personWith50Points = []
for (let i = 0; i < username.length; i++) {
  let point = username[i][1].points
  if (point >= 50) {
    personWith50Points.push(username[i][0])
  }
}
console.log(personWith50Points)
//3
let MERNdevelopers = []
const MERNstack = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i < username.length; i++) {
  let skill = username[i][1].skills
  if (
    skill.includes(MERNstack[0]) &&
    skill.includes(MERNstack[1]) &&
    skill.includes(MERNstack[2]) &&
    skill.includes(MERNstack[3])
  ) {
    MERNdevelopers.push(username[i][0])
  }
}
console.log(MERNdevelopers)
//4
users.Nate = {
  email: 'nakinthone@gmail.com',
  skills: ['JavaScript', 'HTML', 'CSS', 'Java', "C", "Python"],
  age: 20,
  isLoggedIn: false,
  points: 20
}
//5
const keys = Object.keys(users)
console.log(keys)
//6
const values = Object.values(users)
//7
const countries = {
  Thailand: {
    capital: 'Bangkok',
    populations: 70_000_000,
    language: 'Thai'
  }
}
const countriesArr = Object.entries(countries)
for (let i = 0; i < countriesArr.length; i++) {
  let s = `\
country name: ${countriesArr[i][0]}\n\
capital: ${countriesArr[i][1].capital}\n\
populations: ${countriesArr[i][1].populations}\n\
language: ${countriesArr[i][1].language}
`
console.log(s)
}

