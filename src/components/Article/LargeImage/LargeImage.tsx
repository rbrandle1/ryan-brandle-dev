import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './LargeImage.module.scss';
import setInlineStyles from '@/helpers/functions';

interface LargeImageProps {
	className?: string;
	src: string | StaticImageData;
	alt: string;
	caption?: string;
	captionLeft?: boolean;
	hasCaptionIcon?: boolean;
	isHero?: boolean;
	logo?: React.ReactNode;
	logoMaxWidth?: string;
	logoOffset?: string;
	metaTags?: string[];
	placeholder?: 'blur' | 'empty';
	priority?: boolean;
}

const LargeImage = ({
	className,
	src,
	alt,
	caption,
	captionLeft,
	hasCaptionIcon,
	isHero,
	logo,
	logoMaxWidth,
	logoOffset,
	metaTags,
	priority = false,
	placeholder = 'empty',
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
						src={src}
						alt={alt}
						fill
						sizes='(max-width: 1300px) 100vw, 1205px'
						priority={priority}
						placeholder={placeholder}
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
