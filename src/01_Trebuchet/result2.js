import { input, wordRegex, mapping, reverseRegex } from "./app";

const solution = input.trim()
	.split('\n')
	.map(line => line
		.replace(wordRegex, match => mapping[match])
		.replace(reverseRegex, match => mapping[match])
		.replace(/\D/g, _ => ""))
	.map(chars => parseInt(chars.at(0) + chars.at(-1)))
	.reduce((a, b) => a + b, 0);

console.log(solution);

