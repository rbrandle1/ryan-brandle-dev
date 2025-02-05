import cn from 'classnames';
import Image from 'next/image';
import Caption from '@/components/Caption/Caption';
import styles from './SideImage.module.scss';

interface SideImageProps {
	className?: string;
	children?: React.ReactNode;
	caption?: string;
	captionRight?: boolean;
	hasCaptionIcon?: boolean;
	imgSrc: string;
	imgAlt: string;
	imgRight?: boolean;
}

const SideImage = ({
	className,
	imgSrc,
	imgAlt,
	caption,
	captionRight,
	hasCaptionIcon,
	imgRight,
	children,
}: SideImageProps) => {
	return (
		<section className={cn(styles.component, imgRight && styles.imgRight, className)}>
			<figure className={styles.imageContainer}>
				<div className={styles.image}>
					<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
				</div>
				{caption ? (
					<Caption captionRight={captionRight} hasIcon={hasCaptionIcon}>
						{caption}
					</Caption>
				) : null}
			</figure>
			<div className={styles.textContainer}>{children}</div>
		</section>
	);
};

export default SideImage;
