let a = [22,90,88,76,8,1,2,5,11];

function largest(ar,largest=0) {
    let result
    for (let v of ar) {
        const n = v;
        if(n>largest) {
            result = largest;
            largest = n;
        } else if(n<largest && n>result) {
            result = n;
        }
    }
    return result;
}
largest(a)