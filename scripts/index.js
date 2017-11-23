import specialWords from './specialWords';
import { prepareImage, getImageUpdater } from './imageEffect';

{
	const svg1 = document.getElementById('dna-curve-1');
	const svg2 = document.getElementById('dna-curve-2');
	const textEl1 = svg1.getElementById('textContent-1');
	const textEl2 = svg2.getElementById('textContent-2');
	const scrollInfoEl = document.getElementsByClassName('scroll-info')[0];
	// const scrollProgressEl = document.getElementsByClassName('scroll-progress')[0];
	// scrollProgressEl.addEventListener('focus', () => scrollProgressEl.select());
	// scrollProgressEl.addEventListener('click', () => scrollProgressEl.select());

	const imagesListElements = Array.from(document.getElementsByClassName('filtered-image'));
	const images = imagesListElements.map((liElement) => ({
		liElement,
		update: getImageUpdater({
			elements: prepareImage(liElement),
			bodyWidth: window.innerWidth,
			bodyHeight: window.innerHeight,
		}),
		word: liElement.getAttribute('data-word'),
	}));

	let lastScrollTop = 0;
	let lastStartOffset = 0;
	const bodyHeight = document.body.height;

	textEl1.innerHTML = initTextCharsColor(textEl1.textContent);
	textEl2.innerHTML = initTextCharsColor(textEl2.textContent, false);
	document.addEventListener('scroll', updateTextPaths);
	updateTextPaths();

	function initTextCharsColor(text, addSpecialWords) {
		return text
			.trim()
			.split('\n')
			.map((line, lineIndex) => line
				.trim()
				.split(' ')
				.map((w, i) => wrapWord(w, `${lineIndex}${i}`, line.split(' ').length, addSpecialWords))
				.join(' ')
			)
			.join(' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ');
	};

	function wrapWord(word, index, wordsPerLine, addSpecialWords) {
		const cleanedWord = cleanWord(word);
		let wordClass = 'regular-word';
		if (cleanedWord === 'dna') {
			wordClass = 'dna-word';
		}
		else if (isSpecialWord(cleanedWord)) {
			wordClass = 'special-word';
		}
		if (addSpecialWords === false) {
			wordClass = 'non-special-word'
		}
		return `<tspan class="${wordClass} ${cleanedWord}" id="${cleanedWord}-${index}">${word}</tspan>`;
	}

	function updateTextPaths() {
		const bodyHeight = 100000;
		const windowHeight = window.innerHeight;
		const scrollTop = document.documentElement.scrollTop;
		const maxScrollPos = scrollTop / (bodyHeight - windowHeight) * 100;
		const startOffset = 101 - maxScrollPos;
		const scrollInfoOpactiy = 1 - ((scrollTop / 20000) * 10);

		textEl1.setAttribute('startOffset', `${startOffset * 0.996}%`);
		textEl2.setAttribute('startOffset', `${startOffset}%`);
		scrollInfoEl.setAttribute('style', `opacity: ${scrollInfoOpactiy};`);

		// scrollProgressEl.value = `${maxScrollPos}`;
		lastScrollTop = scrollTop;
		lastStartOffset = startOffset;

		specialWords.forEach((specialWord) => {
			const el = svg1.getElementById(specialWord.wordId);
			if (el) {
				const isHigher = maxScrollPos > specialWord.start;
				const isLower = maxScrollPos < specialWord.end;
				const isInRange = isHigher && isLower;
				const image = images.find(({ word }) =>
					word === specialWord.wordId);
				if (isInRange) {
					el.classList.add('active');
					if (image) {
						const whole = specialWord.end - specialWord.start;
						const part = specialWord.end - maxScrollPos;
						const localScrollPercentage = part / whole * 100;
						image.update(localScrollPercentage, specialWord.props);
						image.liElement.classList.add('active');
					}
					document.body.classList.add('active');
				}
				else {
					el.classList.remove('active');
					image && image.liElement.classList.remove('active');
					document.body.classList.remove('active');
				}
			}
		});
	}

	function isSpecialWord(word) {
		return Boolean(specialWords.find(
			({ wordId: specialWord }) =>
				specialWord.toLowerCase().startsWith(`${cleanWord(word)}-`)
		));
	}

	function cleanWord(word) {
		return word.trim().toLowerCase().replace(',', '');
	}
}
