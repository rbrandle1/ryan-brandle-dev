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
	textRight?: boolean;
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
	textRight,
	children,
}: MultiImageProps) => {
	return (
		<div className={cn(styles.multiImage, textRight && styles.textRight, className)}>
			<figure className={styles.image}>
				<Image src={imgSrc1} alt={imgAlt1} fill sizes='(max-width: 768px) 50vw, (max-width: 1290px) 33vw, 391px' />
			</figure>
			<figure className={styles.image}>
				<Image src={imgSrc2} alt={imgAlt2} fill sizes='(max-width: 768px) 50vw, (max-width: 1290px) 33vw, 391px' />
			</figure>
			<figure className={styles.image}>
				<Image src={imgSrc3} alt={imgAlt3} fill sizes='(max-width: 768px) 50vw, (max-width: 1290px) 33vw, 391px' />
			</figure>
			{imgSrc4 && imgAlt4 ? (
				<figure className={styles.image}>
					<Image src={imgSrc4} alt={imgAlt4} fill sizes='(max-width: 768px) 50vw, (max-width: 1290px) 33vw, 391px' />
				</figure>
			) : null}
			<div className={styles.textContainer}>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default MultiImage;
