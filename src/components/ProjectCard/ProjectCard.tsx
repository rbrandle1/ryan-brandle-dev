import Image from 'next/image';
import Link from 'next/link';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import MetaTags from '@/components/MetaTags/MetaTags';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
	caption?: string;
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
	caption,
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
				<Link href={href} tabIndex={-1}>
					<div className={styles.image}>
						{logo ? <div className={styles.logoContainer}>{logo}</div> : null}
						<Image src={imgSrc} alt={imgAlt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw' />
					</div>
				</Link>
				{caption ? <figcaption>{caption}</figcaption> : null}
			</figure>
			<div className={styles.textContainer}>
				<header>
					<h3 className={styles.title}>{title}</h3>
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

export default ProjectCard;
