import cn from 'classnames';
import Image from 'next/image';
import Caption from '@/components/Caption/Caption';
import styles from './SideImage.module.scss';

interface SideImageProps {
	className?: string;
	children?: React.ReactNode;
	caption?: string;
	hasCaptionIcon?: boolean;
	imgSrc: string;
	imgAlt: string;
	imgRight?: boolean;
}

const SideImage = ({ className, imgSrc, imgAlt, caption, hasCaptionIcon, imgRight, children }: SideImageProps) => {
	return (
		<div className={cn(styles.sideImage, imgRight && styles.imgRight, className)}>
			<div className={styles.textContainer}>{children}</div>
			<figure className={styles.imageContainer}>
				<div className={styles.image}>
					<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px' />
				</div>
				{caption ? (
					<Caption captionLeft={!imgRight} hasIcon={hasCaptionIcon}>
						{caption}
					</Caption>
				) : null}
			</figure>
		</div>
	);
};

export default SideImage;
