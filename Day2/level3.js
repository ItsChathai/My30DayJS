let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let key1 = /love/gi
console.log(sentence.match(key1))

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
let key2 = /because/gi
console.log(sentence2.match(key2))

const sentenceA = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing;\
 &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.\
  %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let patternA = /@#$%&+/
console.log(sentenceA.replace(/[^\w\s]|_/g, ""))

let text1 =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numArr = text1.match(/\d+/g)
console.log(numArr)
let salary = parseInt(numArr[0])+parseInt(numArr[1])+parseInt(numArr[2])
console.log("salary =",salary)