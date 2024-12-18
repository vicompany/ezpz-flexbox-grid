import fs from 'node:fs';
import path from 'node:path';
import { globby } from 'globby';

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
		let partialContents = fs.readFileSync(`${import.meta.dirname}/${filePath}.html`).toString();

		if (filePath.includes('nav')) {
			partialContents = partialContents
				.replace(PATTERN_TAG, getNavigationStateReplacer(variableName));
		}

		return partialContents;
	});


	const newFileName = path.basename(file);

	fs.writeFileSync(`${import.meta.dirname}/../../${newFileName}`, newContent);
};

const files = await globby(['*.html']);

for (const file of files) {
	buildPage(file)
}
