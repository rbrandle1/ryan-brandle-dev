import cn from 'classnames';
import styles from '../projects.module.scss';
import Callout from '@/components/Callout/Callout';
import Link from 'next/link';

const InspPage = () => {
	return (
		<div className={styles.projectPage}>
			<header className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.container}>
					<h1 className={styles.h1}>
						How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
					</h1>
					<div className={styles.calloutSm}>How vexingly quick daft zebras jump</div>
					<p className={styles.pLg}>
						In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
						profound interconnectedness of all things.{' '}
						<a href='#' className={styles.link}>
							Lorem ipsum dolor
						</a>{' '}
						curiosity.
					</p>
				</div>
			</header>
			<section data-section='dark' className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.h2}>
						How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
					</h2>
					<p className={styles.p}>
						In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
						profound interconnectedness of all things curiosity.
					</p>
					<Callout title='Creation is bing bang in a simple, modular approach since.' titleAccent />
					<p className={styles.p}>
						In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
						profound interconnectedness of all things curiosity.
					</p>
				</div>
			</section>
			<footer className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.container}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p className={styles.p}>
						Ship it! Has been the industry's standard dummy text ever since the 1500s, example when an unknown printer
						took a galley of type and scrambled it to make a type specimen book.Work sans Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, example when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<Link className={styles.button} href='/'>
						back
					</Link>
				</div>
			</footer>
		</div>
	);
};

export default InspPage;
