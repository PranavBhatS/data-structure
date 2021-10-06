let reverse = (x) => {
     const length = x.length;
     for (let i = 0; i < Math.floor(length / 2); i++) {
          const temp = x[i]
          x = x.substring(0, i) +
               //       x.charAt(length - i - 1) +
               x[length - i - 1] +
               x.substring(i + 1, length - i - 1) +
               temp +
               x.substring(length - i)
     }
     return x
};