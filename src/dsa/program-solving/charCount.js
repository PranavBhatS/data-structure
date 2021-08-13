// write a program which takes in a string and counts of each character in the string.
/*

*/

// charCount("Hi pranav 123")
// charCount("Hi hi")
// charCount("")
// charCount("")

function charCount(str) {

     if (!str) return undefined;
     let charCountList = {}
     str = str.toLowerCase();
     for (const char of str) {
          if (isAlpaNumeric(char)) {
               charCountList[char] = (charCountList[char] || 0) + 1;
          }
     }
     console.log(charCountList)
     return charCountList;
}

function isAlpaNumeric(char) {
     //97-122 - lower case a-z
     //48-59
     let charCode = char.charCodeAt(0);
     if ((charCode > 96 && charCode < 123) || (charCode > 47 && charCode < 59)) {
          return true
     }
     return false;
}

charCount("!A")
