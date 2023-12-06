import { input } from "./app";

const result = input.trim().split("\n")
  .map((line) => line
    .replace(/[^:]*:/, _ => ""))
  .map(game => game
    .split("|")
    .map(round => round.trim())
    .join(' ')
    .split(/\s+/)
    .filter((elem, num, arr) => arr
      .indexOf(elem) !== num))
  .map(x => x.length)
  .filter(x => x)
  .map(x => 2 ** (x - 1))
  .reduce((acc, item) => acc + item, 0);

console.log(result);
