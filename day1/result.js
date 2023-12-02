import { input, getFirstAndLastString } from "./app";

const solution1 = input
	.split("\n")
	.map(line => line
		.split("")
		.filter((ch) => !ch.match(/\D/)))
	.map(chars => parseInt(getFirstAndLastString(chars)
		.join("")))
	.reduce((a, b) => a + b, 0);

const solution2 = input
	.split("\n")
	.map(line => line
		.replace(/\D/g, _ => ""))
	.map(chars => parseInt(getFirstAndLastString(chars)
		.join("")))
	.reduce((a, b) => a + b, 0);

console.log({solution1, solution2});
