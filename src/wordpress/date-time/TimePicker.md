# TimePicker

## Usage

Render a TimePicker.

```jsx
import { TimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';
import { withState } from '@wordpress/compose';

const MyTimePicker = withState( {
	date: new Date(),
} )( ( { date, setState } ) => {
	const settings = __experimentalGetSettings();

	// To know if the current timezone is a 12 hour time with look for an "a" in the time format.
	// We also make sure this a is not escaped by a "/".
	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase() // Test only the lower case a
			.replace( /\\\\/g, '' ) // Replace "//" with empty strings
			.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
	);

	return (
		<TimePicker
			currentDate={ date }
			onChange={ ( date ) => setState( { date } ) }
			is12Hour={ is12HourTime }
		/>
	);
} );
```

## Props

The component accepts the following props:

### currentDate

The current date and time at initialization. Optionally pass in a `null` value to specify no date is currently selected.

- Type: `string`
- Required: No
- Default: today's date

### onChange

The function called when a new date or time has been selected. It is passed the `currentDate` as an argument.

- Type: `Function`
- Required: Yes

### is12Hour

Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is displayed and the time format is assumed to be MM-DD-YYYY.

- Type: `bool`
- Required: No

### isInvalidDate

A callback function which receives a Date object representing a day as an argument, and should return a Boolean to signify if the day is valid or not.

- Type: `Function`
- Required: No
