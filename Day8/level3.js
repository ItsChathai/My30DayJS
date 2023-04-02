//1
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    totalIncome: function () {
        let total = 0
        for (let i = 0; i < this.incomes.length; i++) {
            const income = this.incomes[i];
            total += income
        }
        return total
    },
    totalExpense: function () {
        let total = 0
        for (let i = 0; i < this.expenses.length; i++) {
            const expense = this.expenses[i];
            total += expense
        }
        return total
    },
    accountInfo: function () {
        let s = `\
Name: ${this.firstName} ${this.lastName}\n\
Incomes: ${this.incomes}\n\
Expense: ${this.expenses}\n\
Total income: ${this.totalIncome()}\n\
Total expense: ${this.totalExpense()}\n\
Balance: ${this.accountBalance()}
        `
        return s
    },
    addIncome: function (income) {
        this.incomes.push(income)
    },
    addExpense: function (expense) {
        this.expenses.push(expense)
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    }
}
console.log(personAccount.accountInfo())
//2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

import { userIdGenerator, nowDateTime } from "./functions.js"
function createNewUser(newUsername, newEmail, password) {
    for (let i = 0; i < users.length; i++) {
        const username = users[i].username
        const email = users[i].email
        if (
            newUsername == username ||
            newEmail == email
        ) {
            window.alert(`This user is already exist!`)
            return
        }
    }
    const newUser = {
        _id: userIdGenerator(6),
        username: newUsername,
        email: newEmail,
        password: password,
        createdAt: nowDateTime(),
        isLoggedIn: false
    }
    users.push(newUser)
    window.alert(`User: ${newUser.username} created!`)
}
function signUp() {
    const newUsername = window.prompt("Enter Username")
    const newEmail = window.prompt("Enter Email")
    const password = window.prompt("Enter Password")
    createNewUser(newUsername, newEmail, password)
}
signUp()
//3
function rateProduct(productID, userID, rate) {
    const newRate = { userId: userID, rate: rate }
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product._id == productID) {
            product.ratings.push(newRate)
        }
    }
}
function averageRating(productID) {
    let sumAllRate = 0
    let nOfRate = 0
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product._id == productID) {
            let rating = product.ratings
            for (let j = 0; j < rating.length; j++) {
                sumAllRate += ratings[j].rate
                nOfRate++
            }
        }
    }
    return sumAllRate / nOfRate
}
//4
function likeProduct(userID, productID) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product._id == productID) {
            let likes = product.likes
            if (likes.includes(userID)) {
                likes.pull(likes.indexOf(userID))
            } else {
                likes.push(userID)
            }
        }
    }
}