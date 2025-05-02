'use client';

import { useEffect } from 'react';

interface CodePenLoaderProps {
	__CPEmbed?: (selector?: string) => void;
}

export default function CodePenLoader() {
	useEffect(() => {
		const win = window as CodePenLoaderProps;
		if (typeof window !== 'undefined' && win.__CPEmbed) {
			win.__CPEmbed();
		}
	}, []);

	return null;
}
