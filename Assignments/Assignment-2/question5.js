let arr =[10,20,30,40,50];
let largeNum=Math.max(...arr);
console.log(`Largest number: ${largeNum}`)
let sum =0
for (let i=0;i<arr.length;i++){
    sum += arr[i];
}
console.log(`Sum of Array: ${sum}`)
