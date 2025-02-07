'use client';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import styles from './FeaturedProject.module.scss';

interface FeaturedProjectProps {
	className?: string;
	caption?: string;
	imgRight?: boolean;
	imgSrc: string;
	imgAlt: string;
	hasCropIcon?: boolean;
	logo?: React.ReactNode;
	title: string | React.ReactNode;
	metaTags?: string[];
	description: string;
	buttonText: string;
	href: string;
}

const FeaturedProject = ({
	className,
	caption,
	imgRight,
	imgSrc,
	imgAlt,
	hasCropIcon,
	logo,
	title,
	metaTags,
	description,
	buttonText,
	href,
}: FeaturedProjectProps) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<article
			ref={ref}
			className={cn(styles.component, imgRight && styles.imgRight, inView && styles.fadeInUp, className)}
		>
			{hasCropIcon ? (
				<div className={styles.cropIconContainer}>
					<IconLinkedIn />
				</div>
			) : null}
			<figure className={styles.imageContainer}>
				<Link href={href} aria-label={`Read more about ${title}`} tabIndex={-1}>
					<div className={styles.image}>
						{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
						<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1230px) 50vw, 530px' />
					</div>
				</Link>
				{caption ? (
					<Caption captionLeft={!imgRight} hasIcon={false}>
						{caption}
					</Caption>
				) : null}
			</figure>
			<div className={styles.textContainer}>
				<header>
					<h3 className={styles.title}>{title}</h3>
					{metaTags ? <MetaTags items={metaTags} iconAccent /> : null}
				</header>
				<p className={styles.description}>{description}</p>
				<Link className={styles.button} href={href} aria-label={`Read more about ${title}`}>
					{buttonText}
				</Link>
			</div>
		</article>
	);
};

export default FeaturedProject;
