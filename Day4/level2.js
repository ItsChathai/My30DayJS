/*
//1
let score = window.prompt("Enter score: ")
grade = 'ABCDF'
if(score>=80){
    grade = grade[0]
}else if(score>=70){
    grade = grade[1]
}else if(score>=60){
    grade = grade[2]
}else if(score>=50){
    grade = grade[3]
}else{
    grade = grade[5]
}
window.alert(`Grade ${grade}`)

//2
let month = window.prompt("Enter month: ")
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
window.alert(`${month} is in ${season}.`)

//3
let day = window.prompt("What is the day today?")
switch (day.toLowerCase()) {
    case "sunday":
    case "saturday":
        window.alert(`${day} is a weekend!`); // Sunday (0) or Saturday (6)
        break;
    default:
        window.alert(`${day} is a workday`); // Monday (1) through Friday (5)
        break;
  }
  */