'use client';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Caption from '@/components/Caption/Caption';
import styles from './MultiImage.module.scss';

interface MultiImageProps {
	className?: string;
	children?: React.ReactNode;
	caption?: string;
	hasCaptionIcon?: boolean;
	imgSrc1: string | StaticImageData;
	imgAlt1: string;
	imgSrc2: string | StaticImageData;
	imgAlt2: string;
	imgSrc3: string | StaticImageData;
	imgAlt3: string;
	imgSrc4?: string | StaticImageData;
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
	caption,
	hasCaptionIcon,
	textRight,
	children,
}: MultiImageProps) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const imageSizes = '(max-width: 768px) 100vw,  (max-width: 1290px) 33vw, 391px';

	const ariaLabel = 'multi-image-caption';

	const renderCaption = (
		<>
			{caption ? (
				<Caption id={ariaLabel} className={styles.caption} captionLeft={textRight} hasIcon={hasCaptionIcon}>
					{caption}
				</Caption>
			) : null}
		</>
	);

	const images = (
		<>
			<figure className={styles.figure} aria-labelledby={ariaLabel}>
				<div className={styles.image}>
					<Image src={imgSrc1} alt={imgAlt1} fill sizes={imageSizes} />
				</div>
			</figure>
			<figure className={styles.figure} aria-labelledby={ariaLabel}>
				<div className={styles.image}>
					<Image src={imgSrc2} alt={imgAlt2} fill sizes={imageSizes} />
				</div>
			</figure>
			<figure className={styles.figure} aria-labelledby={ariaLabel}>
				<div className={styles.image}>
					<Image src={imgSrc3} alt={imgAlt3} fill sizes={imageSizes} />
				</div>
				{!imgSrc4 ? renderCaption : null}
			</figure>
			{imgSrc4 ? (
				<figure className={styles.figure} aria-labelledby={ariaLabel}>
					<div className={styles.image}>
						<Image src={imgSrc4} alt={imgAlt4 || ''} fill sizes={imageSizes} />
					</div>
					{renderCaption}
				</figure>
			) : null}
		</>
	);

	return (
		<div className={cn(styles.multiImage, textRight && styles.textRight, className)}>
			{isMobile ? (
				<div className={styles.mobileSlider}>
					<div className={styles.slideWrapper}>{images}</div>
				</div>
			) : (
				images
			)}
			<div className={styles.textContainer}>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default MultiImage;
