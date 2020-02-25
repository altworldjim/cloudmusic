const cMajorScaleFrequencies = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    349.23, // F4
    392.00, // G4
    440.00, // A4
    493.88, // B4
    523.25 // C5
];

let vcos = [];
let vcas = [];

function playNote(frequency, i) {

	/* VCO */
	vcos[i].frequency.value = frequency;

}

function start() {

	window.context = new AudioContext;
	for(i = 0; i < 3; i++) {

		/* VCO */
		let vco = context.createOscillator();
		vco.type = 'triangle';

		/* VCA */
		let vca = context.createGain();
		vca.gain.setValueAtTime(0.1, context.currentTime);

		/* Connections */
		vco.connect(vca);
		vca.connect(context.destination);

		vco.start(0);

		vcos.push(vco);
		vcas.push(vca);
	}

	let f1 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
	playNote(f1, 0);
	setInterval(function() {
		// pick random note from c major scale
		f1 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
		playNote(f1, 0);
	}, 500);

	let f2 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
	playNote(f2 / 2, 1);
	setInterval(function() {
		// pick random note from c major scale
		f2 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
		playNote(f2 / 2, 1);
	}, 750);	

	let f3 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
	playNote(f3 / 4, 2);
	setInterval(function() {
		// pick random note from c major scale
		f3 = cMajorScaleFrequencies[Math.floor(Math.random() * cMajorScaleFrequencies.length)]
		playNote(f3 / 4, 2);
	}, 1000);	

}
