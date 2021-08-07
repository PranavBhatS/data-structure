
//reverse the string

function reverse(str) {
     if (!str || str.length === 1) return str;
     let charArray = str.split("");

     let reversedStr = ''
     for (let i = 0; i < str.length; i++) {
          reversedStr += charArray.pop()
     }
     return reversedStr;
}
const reverse2 = str => [...str].reverse().join("")
console.log(Date.now() * 1000)
console.log(reverse("pranav bhat"))
console.log(Date.now() * 1000)
console.log(reverse2("p"))
console.log(Date.now() * 1000)
