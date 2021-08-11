
function validAnagram(str1, str2) {

     if (str1.length !== str2.length) return false;
     if (str1 === str2) return true;
     let lookup = {};
     for (const letter of str1) {
          // lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
          lookup[letter] = (lookup[letter] || 0) + 1;
     }
     console.log(lookup)

     for (const letter of str2) {
          // can't find letter or letter count is 0 then return false
          if (!lookup[letter]) return false;
          lookup[letter] -= 1;
     }
     return true;
}

console.log(validAnagram("pranav", "vanrpa"))