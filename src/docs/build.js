const fs = require('fs');
const globby = require('globby');
const path = require('path');

const PATTERN_TAG = /\{\{(.+)\}\}/g;

const getNavigationStateReplacer = (variableName) => (match, variable) => {
	if (variable !== variableName) return '';
	return 'is-active';
};

const buildPage = (file) => {
	const content = fs.readFileSync(file);
	const newContent = content.toString().replace(PATTERN_TAG, (match, filePath) => {
		const fileName = path.basename(file, '.html');
		const variableName = `${fileName}-state`;
		let partialContents = fs.readFileSync(`${__dirname}/${filePath}.html`).toString();

		if (filePath.includes('nav')) {
			partialContents = partialContents
				.replace(PATTERN_TAG, getNavigationStateReplacer(variableName));
		}

		return partialContents;
	});

	const newFileName = path.basename(file);

	fs.writeFileSync(`${__dirname}/../../${newFileName}`, newContent);
};

globby([`${__dirname}/*.html`])
	.then((files) => {
		files.forEach(buildPage);
	}
);
