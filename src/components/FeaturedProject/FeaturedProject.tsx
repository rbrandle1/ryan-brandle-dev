import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import IconMeta from '@/components/Icons/IconMeta';
import styles from './FeaturedProject.module.scss';

interface FeaturedProjectProps {
	imageRight?: boolean;
}

const FeaturedProject = ({ imageRight }: FeaturedProjectProps) => {
	return (
		<article className={styles.article}>
			<figure className={cn(styles.imageContainer, imageRight && styles.imageRight)}>
				<div className={styles.image}>
					<Link href='/style'>
						<Image
							src='https://images.unsplash.com/photo-1484821582734-6c6c9f99a672'
							alt='Example project image'
							layout='fill'
						/>
					</Link>
				</div>
				<figcaption>Example project image</figcaption>
			</figure>
			<div className={styles.textContainer}>
				<header>
					<h2 className={styles.title}>The Inspirato Design System</h2>
					<div className={styles.meta}>
						<div className={styles.iconContainer}>
							<IconMeta />
						</div>
						<div className={styles.metaText}>Branding • UX/UI • HTML • CSS • JS • React • Storybook</div>
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
