import { StyleValue } from '@/types/styleTypes';

const setInlineStyles = (styles: Record<string, StyleValue>) => {
	if (!Object.keys(styles).length) return undefined;

	const filteredStyles = Object.fromEntries(
		Object.entries(styles).filter(
			([_key, value]) => value !== null && value !== undefined && value !== false && value !== '',
		),
	);

	return Object.keys(filteredStyles).length ? filteredStyles : undefined;
};

export default setInlineStyles;
