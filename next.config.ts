import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: [
			path.join(__dirname, 'src/components'), // For .src/components and deeper levels
			path.join(__dirname, 'src/app'), // For .src/app and its subdirectories
		],
		prependData: `@use "@/styles/utils/_animation.scss";`,
	},
};

export default nextConfig;
