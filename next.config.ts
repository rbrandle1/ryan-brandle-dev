import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/components'), path.join(__dirname, 'src/app')],
		prependData: `@use "@/styles/utils/animation.scss" as *;`,
	},
};

export default nextConfig;
