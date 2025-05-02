import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import IconCrop from '@/components/Icons/IconCrop';
import MetaTags from '@/components/MetaTags/MetaTags';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	id?: string;
	className?: string;
	imgSrc: string | StaticImageData;
	imgAlt: string;
	hasCropIcon?: boolean;
	logo?: React.ReactNode;
	title: string | React.ReactNode;
	accessibleTitle: string;
	metaTags?: string[];
	description: string | { __html: string };
	buttonText: string;
	href: string;
}

const ProjectCard = ({
	id,
	className,
	imgSrc,
	imgAlt,
	hasCropIcon,
	logo,
	title,
	accessibleTitle,
	metaTags,
	description,
	buttonText,
	href,
}: ProjectCardProps) => {
	return (
		<article id={id} className={cn(styles.component, className)}>
			{hasCropIcon ? (
				<div className={styles.cropIconContainer}>
					<IconCrop />
				</div>
			) : null}
			<figure className={styles.imageContainer}>
				<Link href={href} aria-label={`Read more about ${accessibleTitle}`} tabIndex={-1}>
					<div className={styles.image}>
						{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
						<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 95vw, (max-width: 1096px) 46vw, 494px' />
					</div>
				</Link>
			</figure>
			<div className={styles.textContainer}>
				<header>
					<Link href={href} tabIndex={-1}>
						<h3 className={styles.title}>{title}</h3>
					</Link>
				</header>
				{metaTags ? <MetaTags items={metaTags} iconAccent /> : null}
				<p
					className={styles.description}
					{...(typeof description === 'object' && '__html' in description
						? { dangerouslySetInnerHTML: description }
						: { children: description })}
				/>
				<Link className={styles.button} href={href} aria-label={`Read more about ${accessibleTitle}`}>
					{buttonText}&nbsp;&rarr;
				</Link>
			</div>
		</article>
	);
};

export default ProjectCard;
