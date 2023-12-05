// "only 12 red cubes, 13 green cubes, and 14 blue cubes?";
export const input = (await Bun.file("./input.txt").text()).toLowerCase();
export const exampleInput = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

export type Color = "r" | "b" | "g";
export type ColorRecord = { [key in Color]: number };

export const validateColorCounts = (colors: ColorRecord): boolean =>
	colors.r <= 12 && colors.g <= 13 && colors.b <= 14;

const res2 = input.trim().split("\n")
	.map((line) => line.split(":")
			.flatMap((gameLines) => gameLines.split(";")).slice(1)
			.map((move) => move.trim().split(", ")
					.reduce((result, x) => ({...result,
						[x.split(" ")[1]]: (result[x.split(" ")[1]] || 0) 
						+ parseInt(x.split(" ")[0])
					}), {} as ColorRecord))			
				.reduce((acc, obj) =>	Object.entries(obj)
		.reduce((acc, [color, count]) => ({...acc,[color]: (acc[color] || 0) + count}),acc),{}))
	.map((x) => validateColorCounts(x))
	.map((bool, index) => (bool ? index + 1 : 0))
	.filter((x) => x)
	.reduce((acc, item) => acc + item, 0);

console.log(res2);
