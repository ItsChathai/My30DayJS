/*
//1
let month = window.prompt("Enter month: ")
let day
switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "april":
    case "november":
    case "june":
        day = 30
        break;
    case "january":
    case "march":
    case "may":    
    case "december":
    case "july":
    case "august":
        day = 31
        break;
    case "february":    
        day = 28
        break;
    default:
        season = "Your mind"
        break;
}
window.alert(`${month} has ${day} days.`)
*/
//2
let month = window.prompt("Enter month: ")
let year = window.prompt("Enter year: ")
let day
let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "april":
    case "november":
    case "june":
        day = 30
        break;
    case "january":
    case "march":
    case "may":
    case "december":
    case "july":
    case "august":
        day = 31
        break;
    case "february":
        isLeapYear?day = 29:day = 28;
        
        break;
    default:
        season = "Your mind"
        break;
}
window.alert(`${month} has ${day} days.`)