import Image from 'next/image';
import Link from 'next/link';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import MetaTags from '@/components/MetaTags/MetaTags';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
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

const ProjectCard = ({
	imgSrc,
	imgAlt,
	hasCropIcon,
	logo,
	title,
	metaTags,
	description,
	buttonText,
	href,
}: ProjectCardProps) => {
	return (
		<article className={styles.component}>
			{hasCropIcon ? (
				<div className={styles.cropIconContainer}>
					<IconLinkedIn />
				</div>
			) : null}
			<figure className={styles.imageContainer}>
				<Link href={href} aria-label={`Read more about ${title}`} tabIndex={-1}>
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

export default ProjectCard;
