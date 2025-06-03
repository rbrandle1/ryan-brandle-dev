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
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value:
							"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cpwebassets.codepen.io https://public.codepenassets.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://cpwebassets.codepen.io https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://cpwebassets.codepen.io; frame-src 'self' https://codepen.io; connect-src 'self' https://cpwebassets.codepen.io https://potterapi-fedeperin.vercel.app",
					},
				],
			},
		];
	},
};

export default nextConfig;
