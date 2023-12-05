import { input } from "./app";

const solution2 = input.trim()
	.split("\n")
	.map(line => line
		.replace(/\D/g, _ => ""))
	.map(chars => parseInt(chars.at(0) + chars.at(-1)))
	.reduce((a, b) => a + b, 0);

console.log(solution2);
