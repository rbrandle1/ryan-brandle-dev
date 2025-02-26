import cn from 'classnames';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './LargeImage.module.scss';
import setInlineStyles from '@/helpers/functions';
// import heroImg from '/images/insp/hero.jpg';
// import heroImg from '/public/images/insp/hero.jpg';
import heroImg from '../../../../public/images/insp/hero.jpg';
// import heroImg from '/images/insp/hero.jpg';

interface LargeImageProps {
	className?: string;
	// src: string | StaticImageData;
	src: string | StaticImageData;
	blurDataURL?: string;
	alt: string;
	caption?: string;
	captionLeft?: boolean;
	hasCaptionIcon?: boolean;
	logo?: React.ReactNode;
	logoMaxWidth?: string;
	logoOffset?: string;
	metaTags?: string[];
	isHero?: boolean;
	priority?: boolean;
}

const LargeImage = ({
	className,
	src,
	blurDataURL,
	alt,
	caption,
	captionLeft,
	hasCaptionIcon,
	logo,
	logoMaxWidth,
	logoOffset,
	metaTags,
	isHero,
	priority = false,
}: LargeImageProps) => {
	return (
		<div className={cn(styles.largeImage, isHero && styles.hero, className)}>
			{metaTags ? (
				<aside className={styles.metaBox}>
					<MetaTags items={metaTags} />
				</aside>
			) : null}
			<figure>
				<div className={styles.image}>
					{logo ? (
						<div
							style={setInlineStyles({
								'--logo-offset': logoOffset ? logoOffset : null,
								'--logo-max-width': logoMaxWidth ? logoMaxWidth : null,
							})}
							className={styles.logoContainer}
						>
							{logo}
						</div>
					) : null}
					<Image
						// src='/images/insp/hero.jpg'
						// src={heroImg}
						src={src}
						alt={alt}
						fill
						sizes='(max-width: 1300px) 100vw, 1205px'
						priority={priority}
						placeholder='blur' // Add this line
						// blurDataURL={blurDataURL} // Add this line
					/>
				</div>
				{caption ? (
					<Caption className={styles.caption} captionLeft={captionLeft} hasIcon={hasCaptionIcon}>
						{caption}
					</Caption>
				) : null}
			</figure>
		</div>
	);
};

export default LargeImage;
