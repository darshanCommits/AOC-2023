import { input, wordRegex, mapping, getFirstAndLastString, reverseRegex } from "./app";

const solution = input
	.split('\n')
	.map(line => line
		.replace(wordRegex, match => mapping[match])
		.replace(reverseRegex, match => mapping[match])
		.replace(/\D/g, _ => ""))
	.map(chars => parseInt(getFirstAndLastString(chars)
		.join("")))
	.reduce((a, b) => a + b, 0);

console.log({solution});

