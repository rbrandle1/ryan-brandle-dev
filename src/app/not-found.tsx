import cn from 'classnames';
import Button from '@/components/Button/Button';
import styles from './not-found.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page Not Found',
	description: "You've stumbled upon a page that doesn't exist.",
};

const NotFoundPage = () => {
	return (
		<article className={styles.notFound} data-not-found>
			<section className={cn(styles.soloSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>Ahh, the trusty 404 component...</h1>
					<p>
						While it's perfectly engineered to tell you this page doesn't exist, it's probably not what you were looking
						for. Let's get you back to the good stuff.
					</p>
					<Button className={styles.button} href={'/'}>
						View my work
					</Button>
				</div>
			</section>
		</article>
	);
};

export default NotFoundPage;
