import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import IconMeta from '@/components/Icons/IconMeta';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import styles from './FeaturedProject.module.scss';

interface FeaturedProjectProps {
	imageRight?: boolean;
}

const FeaturedProject = ({ imageRight }: FeaturedProjectProps) => {
	return (
		<article className={styles.article}>
			<figure className={cn(styles.imageContainer, imageRight && styles.imageRight)}>
				<div className={styles.cropIconContainer}>
					<IconLinkedIn />
				</div>
				<Link href='/style'>
					<div className={styles.image}>
						<div className={styles.logoContainer}>
							<IconLogoInsp />
						</div>
						<Image
							src='https://images.unsplash.com/photo-1484821582734-6c6c9f99a672'
							alt='Example project image'
							layout='fill'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw'
						/>
					</div>
				</Link>
				<figcaption>Credit: Inspirato, Unsplash</figcaption>
			</figure>
			<div className={styles.textContainer}>
				<header>
					<h2 className={styles.title}>The Inspirato Design System</h2>
					<div className={styles.meta}>
						<div className={styles.iconContainer}>
							<IconMeta />
						</div>
						<div className={styles.metaText}>
							Branding&nbsp;• UX/UI&nbsp;• HTML&nbsp;• CSS&nbsp;• JS&nbsp;• React&nbsp;• Storybook
						</div>
					</div>
				</header>
				<p className={styles.description}>
					Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a type specimen book.
				</p>
				<Link className={styles.button} href='/style'>
					button
				</Link>
			</div>
		</article>
	);
};

export default FeaturedProject;
