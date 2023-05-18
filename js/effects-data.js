const EffectsData = {
	chrome: {
		id: 'effect-chrome',
		class: 'effects__preview--chrome',
		filter: 'grayscale',
		min: 0,
		max: 1,
		step: 0.1,
	},
	sepia: {
		id: 'effect-sepia',
		class: 'effects__preview--sepia',
		filter: 'sepia',
		min: 0,
		max: 1,
		start: 1,
		step: 0.1,
	},
	marvin: {
		id: 'effect-marvin',
		class: 'effects__preview--marvin',
		filter: 'invert',
		min: 0,
		max: 100,
		start: 100,
		step: 1,
		units: '%',
	},
	phobos: {
		id: 'effect-phobos',
		class: 'effects__preview--phobos',
		filter: 'blur',
		min: 0,
		max: 3,
		start: 3,
		step: 0.1,
		units: 'px',
	},
	heat: {
		id: 'effect-heat',
		class: 'effects__preview--heat',
		filter: 'brightness',
		min: 1,
		max: 3,
		start: 3,
		step: 0.1,
	},
}

export { EffectsData }