{
	const $container = document.getElementById('poem');

	const verses = [
		'Im Schnabel einen Käse haltend, hockt',
		'auf einem Baumast Meister Rabe.',
		'Von dieses Käses Duft herbeigelockt,',
		'spricht Meister Fuchs, der schlaue Knabe:',
		'»Ah, Herr von Rabe, guten Tag!',
		'Ihr seid so nett und von so feinem Schlag!',
		'Entspricht dem glänzenden Gefieder',
		'auch noch der Wohlklang Eurer Lieder,',
		'dann seid der Phönix Ihr in diesem Waldrevier.«',
		'Dem Raben hüpft das Herz vor Lust. Der Stimme Zier',
		'möcht\' er nun lassen schallen;',
		'er tut den Schnabel auf – und läßt den Käse fallen.',
		'Der Fuchs nimmt ihn und spricht:',
		'»Mein Freundchen, denkt an mich!',
		'Ein jeder Schmeichler mästet sich',
		'vom Fette dessen, der ihn gerne hört.',
		'Die Lehre sei dir einen Käse wert!«',
		'Der Rabe, scham- und reuevoll,',
		'schwört, etwas spät, daß ihm so was nie mehr passieren soll.',
	].map(createDivWithText);

	verses.forEach(({ $el }, index) => {
		$el.classList.add('verse');
		$el.style.setProperty('--fontSize', ` ${(index + 1) * 10}px`);
		$container.appendChild($el);
	});
}

function createDivWithText(text) {
	const $el = document.createElement('div');
	const $text = document.createTextNode(text);
	$el.appendChild($text);
	return { $el, $text, text};
}

