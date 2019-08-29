const path = require( 'path' );
const isEmpty = require( 'lodash/isEmpty' );

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
	require: [
		path.join( __dirname, 'node_modules/@wordpress/components/build-style/style.css' ),
	],

	updateExample( props, exampleFilePath ) {
		console.warn( props );
		console.warn( exampleFilePath );

		if ( props.lang === 'jsx' && props.content ) {
			const componentsMatch  = props.content.match( /const (\w*) =[^>]/ );
			const component = ! isEmpty( componentsMatch ) ? `<${ componentsMatch[ 1 ] } />` : '';

			props.content = `${ props.content }\n\n;${ component }`;
		}
		return props;
	},

	exampleMode: 'expand',

	sections: [
		{
			name: 'Introduction',
			content: 'src/components/README.md',
		},
		{
			name: 'Wordpress Components',
			sections: [
				{
					name: 'Animation',
					sections: [
						{
							name: 'Animate',
							component: 'src/components/animate/index.js',
							content: 'src/wordpress/animate/Animate.md',
						},
					],
					components: [ 'src/components/spinner/*.js' ],
				},
				{
					name: 'Button',
					components: 'src/components/*button*/*.js',
				},
				{
					name: 'Color',
					components: 'src/components/*color*/*.js',
				},
				{
					name: 'Containers',
					components: 'src/components/*container*/*.js',
				},
				{
					name: 'Controls',
					components: 'src/components/*-control*/*.js',
				},
				{
					name: 'Date Time',
					sections: [
						{
							name: 'DateTimePicker',
							component: 'src/components/date-time/index.js',
							content: 'src/components/date-time/README.md',
						},
						{
							name: 'DatePicker',
							component: 'src/components/date-time/date.js',
							content: 'src/wordpress/date-time/DatePicker.md',
						},
						{
							name: 'TimePicker',
							component: 'src/components/date-time/time.js',
							content: 'src/wordpress/date-time/TimePicker.md',
						},
					],
				},
				{
					name: 'Dropdown',
					components: 'src/components/*dropdown*/*.js',
				},
				{
					name: 'Events',
					components: [ 'src/components/isolated-event-container/*.js' ],
				},
				{
					name: 'Font',
					sections: [
						{
							name: 'FontSizePicker',
							component: 'src/components/font-size-picker/index.js',
							content: 'src/wordpress/font-size-picker/FontSizePicker.md',
						},
					],
				},
				{
					name: 'Form',
					components: [
						'src/components/*form*/*.js',
						'src/components/autocomplete/*.js',
						'src/components/drop-zone/*.js',
						'src/components/placeholder/*.js',
						'src/components/resizable-box/*.js',
					],
				},
				{
					name: 'Higher Order',
					components: 'src/components/higher-order/**/*.js',
				},
				{
					name: 'Icons',
					components: 'src/components/*icon*/*.js',
				},
				{
					name: 'Iframes',
					components: [
						'src/components/sandbox/*.js',
						'src/components/focusable-iframe/*.js',
					],

				},
				{
					name: 'Interaction',
					components: [
						'src/components/disabled/*.js',
						'src/components/draggable/*.js',
						'src/components/drop-zone/*.js',
						'src/components/scroll-lock/*.js',
					],
				},
				{
					name: 'Keyboard',
					components: [
						'src/components/navigable-container/*.js',
						'src/components/keyboard-shortcuts/*.js',
					],
				},
				{
					name: 'Loaders',
					components: [ 'src/components/spinner/*.js' ],
				},
				{
					name: 'Menu',
					components: 'src/components/*menu*/*.js',
				},
				{
					name: 'Modal',
					components: 'src/components/*modal*/*.js',
					ignore: 'src/components/modal/aria-helper.js',
				},
				{
					name: 'Notice',
					components: [ 'src/components/*notice*/*.js', 'src/components/snackbar/*.js' ],
				},
				{
					name: 'Panel',
					components: 'src/components/*panel*/*.js',
				},
				{
					name: 'Pickers',
					components: [ 'src/components/*picker*/*.js' ],
				},
				{
					name: 'Popover',
					components: 'src/components/popover/*.js',
					ignore: [
						'src/components/popover/Content.js',
						'src/components/popover/utils.js',
					],
				},
				{
					name: 'Portals',
					components: [ 'src/components/slot-fill/*.js' ],
				},
				{
					name: 'Primitives',
					components: 'src/components/primitives/**/*.js',
				},
				{
					name: 'Select',
					components: 'src/components/*select*/*.js',
				},
				{
					name: 'Text',
					components: [
						'src/components/shortcut/*.js',
						'src/components/external-link/*.js',
					],
				},
				{
					name: 'Toolbar',
					components: 'src/components/*toolbar*/*.js',
				},
				{
					name: 'Tooltips',
					components: 'src/components/tooltip/*.js',
				},
				{
					name: 'Wrappers',
					components: 'src/components/*wrapper*/*.js',
				},
			],
		},
	],
};
