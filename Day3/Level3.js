//15
let time = new Date()

let hour = time.getHours()
hour < 10
    ?hour = `0${hour}`
    :hour 
    ;

let min = time.getMinutes()
min < 10
    ?min = `0${min}`
    :min
    ;

let year = time.getFullYear()
let month = time.getMonth()+1
let day = time.getDate()
//I
let formatI = `${year}-${month}-${day} ${hour}:${min} `
//II
let formatII = `${day}-${month}-${year} ${hour}:${min} `
//III
let formatIII = `${year}/${month}/${day} ${hour}:${min} `

window.alert(formatI)