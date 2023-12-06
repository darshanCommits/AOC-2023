import { exampleInput, input } from "./app";

const result = input.trim().split("\n")
  .map(game => game
    .match(/[^\s|]+/g)
    .filter((elem, num, arr) => arr
      .indexOf(elem) !== num).length)
  .reduce((acc, x) => acc + (x ? 2 ** (x - 1) : 0), 0);

console.log(result);
