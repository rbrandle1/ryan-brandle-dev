// 'use client';
import cn from 'classnames';
import styles from './style.module.scss';

/* Todo: 
	* Figure out why my base/reset styles are loading in above component level styles, like my links. which are using an include... could this by why?
	* Continue typography classes/mixins. links, link-with-icon
	* Make buttons/link
	* Make theme picker component
	* Prep all necessary svgs, figure out if need to recreate logo.
	* Finish header
	* Finish footer
	* Begin stubbing general layout and components within.


	* FUTURE EXPLORATION:
	* Set typography utils and classes... explore more modern ways to do this? has:, etc?
  * Add shadows/elevation, gradients, animation timing and others that don't exist in figma
  * Try setting base space from 1.6 to 1.8. Also, might need to adjust the real big spaces % max to be larger for a more noticeable difference. Can also run the calculation to a raw value to enhance performance.
*/

const TypographyExamples = () => {
	return (
		<>
			<div className={styles.displayLg}>
				Display LG <span className={styles.altFont}>&amp;</span>
			</div>
			<div className={styles.displaySm}>
				Display SM <span className={styles.altFont}>&amp;</span>
			</div>
			<div className={styles.h1}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.h2}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.h3}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.h4}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.h5}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.h6}>
				How vexingly <span className={styles.altFont}>&amp;</span> quick daft zebras jump
			</div>
			<div className={styles.calloutLg}>How vexingly quick daft zebras jump</div>
			<div className={styles.callout}>How vexingly quick daft zebras jump</div>
			<div className={styles.calloutSm}>How vexingly quick daft zebras jump</div>
			<div className={styles.pLg}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='#' className={styles.link}>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity’s unyielding curiosity.
			</div>
			<div className={styles.p}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='http://www.b.com' className={styles.link}>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity’s unyielding curiosity.
			</div>
			<div className={styles.pSm}>
				In the vast cosmic ocean, where celestial bodies dance to the rhythm of gravity, one might ponder the profound
				interconnectedness of all things.{' '}
				<a href='https://www.c.com' className={styles.link}>
					Lorem ipsum dolor
				</a>{' '}
				sit amet, consectetur adipiscing elit, where quasars beam their enigmatic light across spacetime, and galaxies
				weave tapestries of stardust. Nullam sapien sem, tincidunt eget quam nec, ultricies fringilla eros. Integer sit
				amet nunc vel lacus fermentum malesuada. Suspendisse potenti, for the universe is not obligated to make sense to
				us, yet we persist in decoding its mysteries. Sed nec massa nec eros varius dictum et ut arcu, an echo of
				humanity’s unyielding curiosity.
			</div>
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
			<main className={styles.main}>
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
			</main>
		</div>
	);
};

export default StylePage;
