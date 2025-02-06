import cn from 'classnames';
import Image from 'next/image';
// import Caption from '@/components/Caption/Caption';
import styles from './MultiImage.module.scss';

interface MultiImageProps {
	className?: string;
	children?: React.ReactNode;
	// caption?: string;
	// captionRight?: boolean;
	// hasCaptionIcon?: boolean;
	imgSrc1: string;
	imgAlt1: string;
	imgSrc2: string;
	imgAlt2: string;
	imgSrc3: string;
	imgAlt3: string;
	imgSrc4?: string;
	imgAlt4?: string;
	textLeft?: boolean;
}

const MultiImage = ({
	className,
	imgSrc1,
	imgAlt1,
	imgSrc2,
	imgAlt2,
	imgSrc3,
	imgAlt3,
	imgSrc4,
	imgAlt4,
	// caption,
	// captionRight,
	// hasCaptionIcon,
	textLeft,
	children,
}: MultiImageProps) => {
	return (
		<section className={cn(styles.multiImage, textLeft && styles.textLeft, className)}>
			<figure className={styles.image}>
				<Image src={imgSrc1} alt={imgAlt1} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
			</figure>
			<figure className={styles.image}>
				<Image src={imgSrc2} alt={imgAlt2} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
			</figure>
			<figure className={styles.image}>
				<Image src={imgSrc3} alt={imgAlt3} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
			</figure>
			{imgSrc4 && imgAlt4 ? (
				<figure className={styles.image}>
					<Image src={imgSrc4} alt={imgAlt4} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
				</figure>
			) : null}
			<div className={styles.textContainer}>{children}</div>
		</section>
	);
};

export default MultiImage;
