import { type Config } from 'prettier';

const config: Config = {
	useTabs: true,
	tabWidth: 4,
	printWidth: 100,
	endOfLine: 'lf',
	bracketSameLine: true,
	singleQuote: true,
	overrides: [
		{
			files: ['*.yml', '*.yaml', '*.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
		{
			files: ['slides.md', 'pages/*.md'],
			options: {
				parser: 'slidev',
				plugins: ['prettier-plugin-slidev'],
			},
		},
	],
};

export default config;
