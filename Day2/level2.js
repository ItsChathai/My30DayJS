console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another.")
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead.\"")
console.log('10' == 10)
console.log(parseFloat(10.0)==10)
console.log("Python".search("on"),"jargon".search("on"))
let sentence = "I hope this course is not full of jargon."
console.log(sentence.match("jargon"))
let num1to100 = Math.round(Math.random()*100)
console.log(num1to100)
let num50to100 = 100-Math.round(Math.random()*50)
console.log(num50to100)
let num0to255= Math.round(Math.random()*255)
console.log(num0to255)
let s1 = "JavaScript"
let s1i = s1[[Math.round(Math.random()*s1.length)]]
console.log(s1i)
console.log(
"1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125\n")
let phase1 = "'You cannot end a sentence with because because because is a conjunction'"
let key1 = "because"
console.log(phase1.substring(phase1.indexOf(key1),phase1.lastIndexOf(key1)+key1.length))