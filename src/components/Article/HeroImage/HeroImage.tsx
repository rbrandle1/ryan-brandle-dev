import cn from 'classnames';
import Image from 'next/image';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './HeroImage.module.scss';

interface HeroImageProps {
	className?: string;
	src: string;
	alt: string;
	caption?: string;
	captionRight?: boolean;
	logo?: React.ReactNode;
	metaTags?: string[];
}

const HeroImage = ({ className, src, alt, caption, captionRight, logo, metaTags }: HeroImageProps) => {
	return (
		<div className={cn(styles.heroImage, className)}>
			{metaTags ? (
				<aside className={styles.metaBox}>
					<MetaTags items={metaTags} />
				</aside>
			) : null}
			<figure>
				<div className={styles.image}>
					{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
					<Image src={src} alt={alt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw' />
				</div>
				{caption ? <Caption captionRight={captionRight}>{caption}</Caption> : null}
			</figure>
		</div>
	);
};

export default HeroImage;
