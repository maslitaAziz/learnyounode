const argumentList = process.argv;
const thenumbers = argumentList.slice(2,argumentList.length);

let sum = 0;
let hasil = thenumbers.forEach((value) => {
  // convert to a number
  sum += Number(value);
  return sum;
});

console.log(sum);



//official solution

 //   let result = 0

 //   for (let i = 2; i < process.argv.length; i++) {
 //     result += Number(process.argv[i])
  //  }

 //   console.log(result)