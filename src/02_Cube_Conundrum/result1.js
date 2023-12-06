import { input } from "./app";

const solution = input.trim().split("\n")
	.map((line) => line.split(":")
		.flatMap((gameLines) => gameLines.split(";")).slice(1)
		.map((move) => move
			.replace(/[\s,]/g, "")
			.match(/(\d+)([a-z])/g)
			.reduce((acc , match) => 
				({...acc,[match.slice(-1)]: parseInt((match.slice(0,-1)))})
				,{ r: 0, g: 0, b: 0 }))
		.reduce((acc, obj) => ({
	    r: Math.max(acc.r, obj.r),
	    g: Math.max(acc.g, obj.g),
	    b: Math.max(acc.b, obj.b),
		}), { r: 0, g: 0, b: 0 }))
	.map((clr) => clr.r <= 12 && clr.g <= 13 && clr.b <= 14)
	.map((bool, index) => (bool ? index + 1 : 0))
	.reduce((acc, item) => acc + item, 0);

console.log(solution);
