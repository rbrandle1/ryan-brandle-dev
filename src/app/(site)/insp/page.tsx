import cn from 'classnames';
import styles from '../projects.module.scss';
import Callout from '@/components/Callout/Callout';
import Link from 'next/link';
import Image from 'next/image';

const InspPage = () => {
	return (
		<article className={styles.projectPage}>
			<header className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						Creation <span className={styles.altFont}>&amp;</span> Growth of the Inspirato Design System
					</h1>
					<div className={styles.subhead}>
						Preparing a scalable design system for the future of Inspirato's products.
					</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h2 className={styles.h2}>
							The
							<br />
							Problem
						</h2>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<Callout
							className={cn(styles.callout, styles.breakout)}
							title='Creation is bing bang in a simple, modular approach since.'
							titleAccent
						/>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<figure className={cn(styles.imageContainer, styles.breakout)}>
							<div className={styles.image}>
								<Image
									src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
									alt='Boats anchored off a white sandy beach in turquoise blue water'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw'
								/>
							</div>
							<figcaption>test caption</figcaption>
						</figure>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h3 className={styles.h3}>Research, Consolidate, Implement</h3>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<figure className={cn(styles.imageContainer, styles.breakout)}>
							<div className={styles.image}>
								<Image
									src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
									alt='Boats anchored off a white sandy beach in turquoise blue water'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw'
								/>
							</div>
							<figcaption>test caption</figcaption>
						</figure>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
						<p className={styles.p}>
							In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the
							profound interconnectedness of all things curiosity.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.containerGrid}>
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
		</article>
	);
};

export default InspPage;
