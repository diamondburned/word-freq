/* dependencies */
var stm = require('stm');

/* public */
var wf = {
	/* Simply points to stm library */
	tokenise: stm.tokenise,
	/* Simply points to stm library */
	stem: stm.stem,
	/**
	  * Returns the term frequencies of a document as an Object–e.g. `"I like node" -> { I: 1, like: 1, node: 1}`
	  *
	  * text - String. The text in which frequency is to be calculated.
	  * shouldStem (true) - Boolean. Turns stemming on and off. http://en.wikipedia.org/wiki/Stemming
		*/
	freq: function wordFreq(word) {
		let freq = {};
		let list = word.split(' ');

		for (let i = 0; i < list.length; i++) {
			if (freq.hasOwnProperty(list[i]))
				freq[list[i]]++;
			else
				freq[list[i]] = 1;
		}

		return freq;
	}
}

module.exports = wf;
