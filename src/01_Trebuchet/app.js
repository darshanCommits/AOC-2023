export const input = await Bun.file("./input.txt").text();

export const exampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

export const mapping = {
	one: 'o1e',
	two: 't2o',
	three: 'th3ee',
	four: 'fo4r',
	five: 'fi5e',
	six: 's6x',
	seven: 'se7en',
	eight: 'eig8t',
	nine: 'ni9e',
};

export const numPattern = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].join('|')
export const wordRegex = new RegExp(numPattern, '');
export const reverseRegex = new RegExp(`${numPattern}(?!.*\\1)`, 'g');
