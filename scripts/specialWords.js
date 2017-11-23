// const specialWordIds = [
// 	'loyalty,', 'royalty', 'cocaine', 'quarter', 'piece,', 'war', 'peace', 'power,',
// 	'poison,', 'pain', 'joy', 'hustle', 'ambition,', 'flow,', 'born', 'one',
// 	'immaculate', 'conception', 'transform', 'perform', 'weapon', 'contemplate,',
// 	'meditate,', 'off', 'fucking', 'head', 'put-the-kids-end-bed', 'realness,',
// 	'kill', 'shit', 'millions,', 'buildin’', 'dark,', 'evil,', 'rot', 'off,', 'troublesome,',
// 	'heart', 'win', 'serve', 'sound', 'engine', 'bird', 'fireworks', 'corvette',
// 	'skrrt', 'know', 'how', 'who', 'bitch,', 'hormones', 'problem', 'sucker',
// 	'shit', 'snitched,', 'heritage', 'backbone', 'jellyfish,', 'gauge', 'pedigree',
// 	'endlerate', 'shit', 'offend', 'paula’s', 'oldest', 'son', 'murder,', 'conviction',
// 	'burners,', 'boosters,', 'burglars,', 'ballers,', 'dead,', 'redemption', 'scholars,',
// 	'fathers', 'dead', 'kids', 'wish', 'fed', 'forgiveness', 'yeah,', 'soldier’s',
// ];

export default [
	{
		wordId: 'loyalty-10',
		start: 3.649915165225822,
		end: 4.506342409307586,
	},
	{
		wordId: 'royalty-12',
		start: 4.506342409307586,
		end: 5.307223075058577,
	},
	{
		wordId: 'dna-15',
		start: 5.464773369960411,
		end: 6.156580754625515,
	},
	{
		wordId: 'cocaine-20',
		start: 6.338369556435324,
		end: 7.175607982548275,
	},
	{
		wordId: 'war-24',
		start: 7.930031510058981,
		end: 8.409751959279308,
	},
	{
		wordId: 'peace-26',
		start: 8.484487355578896,
		end: 9.013694756403005,
	},
	{
		wordId: 'dna-29',
		start: 9.455037569685707,
		end: 9.921628827664215,
	},
	{
		wordId: 'power-32',
		start: 10.395289650157551,
		end: 10.882079663892705,
	},
	{
		wordId: 'poison-33',
		start: 10.882079663892705,
		end: 11.352710673022543,
	},
	{
		wordId: 'pain-34',
		start: 11.352710673022543,
		end: 11.825361557728044,
	},
	{
		wordId: 'joy-36',
		start: 11.913226145269451,
		end: 12.376787589884463,
	},
	{
		wordId: 'dna-39',
		start: 12.811060838652338,
		end: 13.15847943766664,
	},
	{
		wordId: 'hustle-42',
		start: 13.56048387096774,
		end: 14.33568548387097,
	},
	{
		wordId: 'ambition-44',
		start: 14.556451612903226,
		end: 15.24798387096774,
	},
	{
		wordId: 'flow-45',
		start: 15.327620967741936,
		end: 15.65725806451613,
	},
	{
		wordId: 'dna-48',
		start: 16.222782258064516,
		end: 16.673387096774196,
	},
	{
		wordId: 'born-52',
		start: 17.101814516129032,
		end: 17.610887096774196,
	},
	{
		wordId: 'one-56',
		start: 18.440524193548388,
		end: 18.787298387096772,
	},
	{
		wordId: 'immaculate-60',
		start: 19.572580645161292,
		end: 20.355846774193548,
	},
].map(createRadomProps);

function createRadomProps(element) {
	const x = getRandomFloat(6, -6);
	const y = getRandomFloat(6, -6);
	const z = getRandomFloat(6, -6);
	element.props = {
		xMinMax: [x, x * -1],
		yMinMax: [y, y * -1],
		zMinMax: [z, z * -1],
	};
	return element;
}

function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
