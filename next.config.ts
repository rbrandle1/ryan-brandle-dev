import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./src/styles/**/*', './src/components/**/*', './src/app/**/*'],
		// this was added to force animation keyframes to be compiled. They were not being compiled on the component level.
		prependData: `@use "@/styles/utils/_animation.scss";`,
	},
};

export default nextConfig;
