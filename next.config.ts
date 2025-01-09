import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ['./src/styles/**/*', './src/components/**/*', './src/app/**/*'],
		prependData: `@use "@/styles/utils/_animation.scss" as *;`,
	},
};

export default nextConfig;
