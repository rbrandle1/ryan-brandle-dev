import cn from 'classnames';
import Image from 'next/image';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './HeroImage.module.scss';
import setInlineStyles from '@/helpers/functions';

interface HeroImageProps {
	className?: string;
	src: string;
	alt: string;
	caption?: string;
	captionRight?: boolean;
	hasCaptionIcon?: boolean;
	logo?: React.ReactNode;
	logoMaxWidth?: string;
	logoOffset?: string;
	metaTags?: string[];
}

const HeroImage = ({
	className,
	src,
	alt,
	caption,
	captionRight,
	hasCaptionIcon,
	logo,
	logoMaxWidth,
	logoOffset,
	metaTags,
}: HeroImageProps) => {
	return (
		<div className={cn(styles.heroImage, className)}>
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
					<Image src={src} alt={alt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw' />
				</div>
				{caption ? (
					<Caption captionRight={captionRight} hasIcon={hasCaptionIcon}>
						{caption}
					</Caption>
				) : null}
			</figure>
		</div>
	);
};

export default HeroImage;
