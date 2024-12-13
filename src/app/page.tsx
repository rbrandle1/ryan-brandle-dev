import Image from 'next/image';
import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.home}>
			<main className={styles.main}>
				{/* <section className={styles.section}>
					<div className={styles.displayLg}>Display LG</div>
					<div className={styles.displaySm}>Display SM</div>
					<div className={styles.h1}>How vexingly quick daft zebras jump</div>
					<div className={styles.h2}>How vexingly quick daft zebras jump</div>
					<div className={styles.h3}>How vexingly quick daft zebras jump</div>
					<div className={styles.h4}>How vexingly quick daft zebras jump</div>
					<div className={styles.h5}>How vexingly quick daft zebras jump</div>
					<div className={styles.h6}>How vexingly quick daft zebras jump</div>
					<div className={styles.pLg}>How vexingly quick daft zebras jump</div>
					<div className={styles.p}>How vexingly quick daft zebras jump</div>
					<div className={styles.pSm}>How vexingly quick daft zebras jump</div>
				</section>
				<section data-section='dark' className={styles.section}>
					<div className={styles.displayLg}>Display LG</div>
					<div className={styles.displaySm}>Display SM</div>
					<div className={styles.h1}>How vexingly quick daft zebras jump</div>
					<div className={styles.h2}>How vexingly quick daft zebras jump</div>
					<div className={styles.h3}>How vexingly quick daft zebras jump</div>
					<div className={styles.h4}>How vexingly quick daft zebras jump</div>
					<div className={styles.h5}>How vexingly quick daft zebras jump</div>
					<div className={styles.h6}>How vexingly quick daft zebras jump</div>
					<div className={styles.pLg}>How vexingly quick daft zebras jump</div>
					<div className={styles.p}>How vexingly quick daft zebras jump</div>
					<div className={styles.pSm}>How vexingly quick daft zebras jump</div>
				</section> */}
				<section className={styles.section}>
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
				</section>
				{/* <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div> */}
			</main>
			<footer className={styles.footer}>
				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
					Learn
				</a>
				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
					Examples
				</a>
				<a
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
