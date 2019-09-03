const path = require( 'path' );
const isEmpty = require( 'lodash/isEmpty' );

const sections = require( './styleguide.sections' );

module.exports = {
	components: 'src/components/**/*.js',

	ignore: [
		'**/node_modules/**',
		'**/__tests__/**',
		'**/*.test.{js,jsx,ts,tsx}',
		'**/*.spec.{js,jsx,ts,tsx}',
		'**/*.d.ts',
		'**/test/**',
		'**/*.native.js',
		'**/mobile/**',
	],

	styleguideDir: './',

	require: [
		path.join( __dirname, 'node_modules/@wordpress/components/build-style/style.css' ),
	],

	updateExample( props, exampleFilePath ) {
		console.warn( props );
		console.warn( exampleFilePath );

		if ( props.lang === 'jsx' && props.content ) {
			const componentsMatch  = props.content.match( /[^\t]const (\w+) =/ );
			const component = ! isEmpty( componentsMatch ) ? `;<${ componentsMatch[ 1 ] } />` : '';

			props.content = `${ props.content }\n\n${ component }`;
		}
		return props;
	},

	exampleMode: 'expand',

	sections,
};
