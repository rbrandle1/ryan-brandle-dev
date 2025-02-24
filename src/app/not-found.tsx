'use client';

import cn from 'classnames';
import Link from 'next/link';
import styles from '../app/(site)/projects.module.scss';
import { useSearchParams } from 'next/navigation';

const NotFoundPage = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<section className={cn(styles.heroSection, styles.soloSection, styles.accentEdge)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>Ahh, the trusty 404 component...</h1>
					<p>
						While it's perfectly engineered to tell you this page doesn't exist, it's probably not what you were looking
						for. Let's get you back to the good stuff.
					</p>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</section>
		</article>
	);
};

export default NotFoundPage;
