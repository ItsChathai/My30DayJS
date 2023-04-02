export function userIdGenerator(l=5,n=1) {
    let newID = ""
    const randomNum = (range) => {
        return Math.round(Math.random() * range)
    }
    const makeString = (n) => {
        let s = n.toString(36)
        if (Math.round(Math.random())) {
            s = s.toUpperCase()
        }
        return s
    }
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = 0; j < l; j++) {
            temp += makeString(randomNum(36))
        }
        newID += temp + '\n'
    }
    return newID
}
export function nowDateTime(){
    function addZero(n){
        return n<10?'0'+n:n
    }
    let now = new Date()
    let dd = addZero(now.getDate())
    let mm = addZero(now.getMonth()+1)
    let yyyy = now.getFullYear()
    let min = addZero(now.getMinutes())
    let hour
    let AmPm = ['AM','PM']
    if(now.getHours()>12){
        hour = now.getHours()-12
        AmPm = AmPm[1]
    }else{
        hour = now.getHours()
        AmPm = AmPm[0]
    }
    let s = `${dd}/${mm}/${yyyy} ${hour}:${min} ${AmPm}`
    return s
}