import cn from 'classnames';
import Image from 'next/image';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './LargeImage.module.scss';
import setInlineStyles from '@/helpers/functions';

interface LargeImageProps {
	className?: string;
	src: string;
	alt: string;
	caption?: string;
	captionLeft?: boolean;
	hasCaptionIcon?: boolean;
	logo?: React.ReactNode;
	logoMaxWidth?: string;
	logoOffset?: string;
	metaTags?: string[];
	isHero?: boolean;
}

const LargeImage = ({
	className,
	src,
	alt,
	caption,
	captionLeft,
	hasCaptionIcon,
	logo,
	logoMaxWidth,
	logoOffset,
	metaTags,
	isHero,
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
					<Image src={src} alt={alt} fill sizes='(max-width: 1300px) 100vw, 1205px' />
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
