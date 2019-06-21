'use strict';

const words = require('./data');

const arrayLength = words.length;

function createParagraph(numOfSentences = 8) {
	let count = 1;
	let paragraph = '';
	while (count <= numOfSentences) {
		paragraph += createSentence();
		count++;
	}
	return paragraph;
}

function createSentence(numOfWords = 6) {
	let indeces = getRandomIndeces(numOfWords, arrayLength);
	indeces = indeces.filter(onlyUnique);
	let words = getRandomWords(indeces);
	words = words.map(word => word.toLowerCase());
	const randomNumber = Math.floor(Math.random() * 20);
	if (randomNumber > 10) {
		// inserting a comma randomly
		words[2] = `${words[2]},`;
	}

	words[0] = capitalizeFirstLetter(words[0]);
	return `${words.join(' ')}. `;
}

function capitalizeFirstLetter(sentence) {
	if (typeof sentence !== 'string') return '';
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

function getRandomIndeces(length, limit) {
	return Array.from({ length }, () => Math.floor(Math.random() * limit));
}

function getRandomWords(indeces) {
	const result = [];
	indeces.forEach(index => {
		result.push(words[index]);
	});
	return result;
}

module.exports = {
	createSentence,
	createParagraph
};
