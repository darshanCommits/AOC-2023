import { exampleInput, input } from "./app";

const result = exampleInput.trim().split("\n")
  .map(game => game
    .match(/[^\s|]+/g)
    .filter((elem, num, arr) => arr
      .indexOf(elem) !== num).length)
  // .map((_, i, arr) => arr.slice(0, i).reduce((sum, count) => sum + Math.min(_, count), 0))
  // .reduce((sum, count) => sum + count, 0);
  // .reduce((sum, count) => sum + count, 0);
// .filter(x => x)
// .reduce
// .map(x => 2 ** (x - 1))
// .reduce((acc, item) => acc + item, 0);


// function deal(arr = []) {
//   // arr.
// }

console.log(result);
