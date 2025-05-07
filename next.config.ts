import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/components'), path.join(__dirname, 'src/app')],
		prependData: `@use "@/styles/utils/animation.scss" as *;`,
	},
	async headers() {
		const disallowHeaders = [
			{
				key: 'X-Robots-Tag',
				value: 'noindex, nofollow, noarchive',
			},
		];

		return [
			{
				source: '/insp',
				headers: disallowHeaders,
			},
			{
				source: '/cf',
				headers: disallowHeaders,
			},
			{
				source: '/comparison',
				headers: disallowHeaders,
			},
			{
				source: '/style',
				headers: disallowHeaders,
			},
		];
	},
};

export default nextConfig;
