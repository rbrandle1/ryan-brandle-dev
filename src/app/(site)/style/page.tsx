import cn from 'classnames';
import { Metadata } from 'next';
import styles from './style.module.scss';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Style Guide',
	description: 'Style guide for the website',
};

const TypographyExamples = () => {
	return (
		<>
			<div className={styles.displayLg}>
				Display LG <span className={styles.altFont}>&amp;</span>
			</div>
			<div className={styles.displaySm}>
				Display SM <span className={styles.altFont}>&amp;</span>
			</div>
			<h1 className={styles.h1}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h1>
			<h2 className={styles.h2}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h2>
			<h3 className={styles.h3}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h3>
			<h4 className={styles.h4}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h4>
			<h5 className={styles.h5}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h5>
			<h6 className={styles.h6}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</h6>
			<div className={styles.calloutLg}>How vexingly quick daft zebras jump</div>
			<div className={styles.callout}>How vexingly quick daft zebras jump</div>
			<div className={styles.calloutSm}>How vexingly quick daft zebras jump</div>
			<p className={styles.pLg}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='#' className={styles.link}>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity's unyielding curiosity.
			</p>
			<p className={styles.p}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='#' className={styles.link} target='_blank'>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity's unyielding curiosity.
			</p>
			<p className={styles.pSm}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='#' className={styles.link}>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity's unyielding curiosity.
			</p>
			<div className={styles.caption}>How vexingly quick daft zebras jump</div>
		</>
	);
};

const SpacingExamples = () => {
	return (
		<>
			<div className={styles.space3xs}></div>
			<div className={styles.space2xs}></div>
			<div className={styles.spaceXs}></div>
			<div className={styles.spaceSm}></div>
			<div className={styles.spaceBase}></div>
			<div className={styles.spaceMd}></div>
			<div className={styles.spaceLg}></div>
			<div className={styles.spaceXl}></div>
			<div className={styles.space2xl}></div>
			<div className={styles.space3xl}></div>
			<div className={styles.space4xl}></div>
			<div className={styles.space5xl}></div>
			<div className={styles.space6xl}></div>
			<div className={styles.space7xl}></div>
			<div className={styles.space8xl}></div>
		</>
	);
};

const StylePage = () => {
	return (
		<div className={styles.home}>
			<section className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.container}>
					<TypographyExamples />
				</div>
			</section>
			<section data-section='dark' className={styles.section}>
				<div className={styles.container}>
					<TypographyExamples />
				</div>
			</section>
			<section className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.container}>
					<SpacingExamples />
				</div>
			</section>
		</div>
	);
};

export default StylePage;
