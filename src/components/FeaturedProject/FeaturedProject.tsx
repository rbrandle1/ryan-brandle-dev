'use client';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import IconCrop from '@/components/Icons/IconCrop';
import MetaTags from '@/components/MetaTags/MetaTags';
import Caption from '@/components/Caption/Caption';
import Button from '@/components/Button/Button';
import styles from './FeaturedProject.module.scss';

interface FeaturedProjectProps {
	id?: string;
	className?: string;
	caption?: string;
	imgRight?: boolean;
	imgSrc: string | StaticImageData;
	imgAlt: string;
	accentBg?: boolean;
	hasCropIcon?: boolean;
	logo?: React.ReactNode;
	title: string | React.ReactNode;
	metaTags?: string[];
	description: string | { __html: string };
	buttonText: string;
	href: string;
}

const FeaturedProject = ({
	id,
	className,
	caption,
	imgRight,
	imgSrc,
	imgAlt,
	accentBg,
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
			id={id}
			ref={ref}
			className={cn(styles.component, imgRight && styles.imgRight, inView && styles.fadeInUp, className)}
		>
			{hasCropIcon ? (
				<div className={styles.cropIconContainer}>
					<IconCrop />
				</div>
			) : null}
			<figure className={styles.imageContainer}>
				<Link href={href} aria-label={`Read more about ${title}`} tabIndex={-1}>
					<div className={styles.image}>
						{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
						<Image
							className={accentBg ? styles.accentBg : undefined}
							src={imgSrc}
							alt={imgAlt}
							fill
							sizes='(max-width: 768px) 95vw, (max-width: 1100px) 45vw, (max-width: 1200px) 494px, (max-width: 1400px) 476px,  566px'
						/>
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
					<Link href={href} tabIndex={-1}>
						<h3 className={styles.title}>{title}</h3>
					</Link>
					{metaTags ? <MetaTags items={metaTags} iconAccent /> : null}
				</header>
				<p
					className={styles.description}
					{...(typeof description === 'object' && '__html' in description
						? { dangerouslySetInnerHTML: description }
						: { children: description })}
				/>
				<Button className={styles.button} href={href} ariaLabel={`Read more about ${title}`}>
					{buttonText}
				</Button>
			</div>
		</article>
	);
};

export default FeaturedProject;
