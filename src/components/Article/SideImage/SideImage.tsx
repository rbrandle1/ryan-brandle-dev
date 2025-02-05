import cn from 'classnames';
import Image from 'next/image';
import styles from './SideImage.module.scss';

interface SideImageProps {
	className?: string;
	children?: React.ReactNode;
	imgSrc: string;
	imgAlt: string;
	// headline: string;
	// text: string | React.ReactNode;
	imgRight?: boolean;
}

const SideImage = ({ className, imgSrc, imgAlt, imgRight, children }: SideImageProps) => {
	return (
		<section className={cn(styles.component, imgRight && styles.imgRight, className)}>
			<figure className={styles.imageContainer}>
				<div className={styles.image}>
					<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw' />
				</div>
			</figure>
			<div className={styles.textContainer}>
				{/* <header>
					<h3 className={styles.headline}>{headline}</h3>
				</header>
				<div className={styles.text}>{text}</div> */}
				{children}
			</div>
		</section>
	);
};

export default SideImage;
