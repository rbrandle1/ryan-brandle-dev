import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import MetaTags from '@/components/MetaTags/MetaTags';
import styles from './FeaturedProject.module.scss';

interface FeaturedProjectProps {
	caption?: string;
	imgRight?: boolean;
	imgSrc: string;
	imgAlt: string;
	logo?: React.ReactNode;
	title: string | React.ReactNode;
	metaTags?: string[];
	description: string;
	buttonText: string;
	href: string;
}

const FeaturedProject = ({
	caption,
	imgRight,
	imgSrc,
	imgAlt,
	logo,
	title,
	metaTags,
	description,
	buttonText,
	href,
}: FeaturedProjectProps) => {
	return (
		<article className={styles.article}>
			<figure className={cn(styles.imageContainer, imgRight && styles.imgRight)}>
				<div className={styles.cropIconContainer}>
					<IconLinkedIn />
				</div>
				<Link href={href}>
					<div className={styles.image}>
						{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
						<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw' />
					</div>
				</Link>
				{caption ? <figcaption>{caption}</figcaption> : null}
			</figure>
			<div className={styles.textContainer}>
				<header>
					<h2 className={styles.title}>{title}</h2>
					{metaTags ? <MetaTags items={metaTags} /> : null}
				</header>
				<p className={styles.description}>{description}</p>
				<Link className={styles.button} href={href}>
					{buttonText}
				</Link>
			</div>
		</article>
	);
};

export default FeaturedProject;
