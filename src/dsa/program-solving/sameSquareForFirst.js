// [1,3,4][9,16,1] == true


function sameSquareForFirstOofN2(a1, a2) {
     if (a1.length !== a2.length) return false;
     let j = 0;
     for (let i = 0; i < a1.length; i++) {
          let currentIndexInA2 = a2.indexOf(Math.pow(a1[i], 2));
          if (currentIndexInA2 === -1) {
               return false;
          }
          a2.splice(currentIndexInA2, 1)
     }
     return true;
}

console.log(sameSquareForFirstOofN2([2, 3, 4], [9, 16, 4]))

function sameOofN(a1, a2) {
     if (a1.length !== a2.length) return false;

     let valPair1 = {}, valPair2 = {}
     for (const val of a1) {
          valPair1[val] = (valPair1[val] || 0) + 1;
     }
     for (const val of a2) {
          valPair2[val] = (valPair2[val] || 0) + 1;
     }

     for (const key in valPair1) {
          if (!(key ** 2 in valPair2)) return false;

          if (valPair2[key * 2] !== valPair1[key]) return false;
     }
     return true;
}
console.log(sameOofN([2, 3, 4], [9, 16, 4]))
