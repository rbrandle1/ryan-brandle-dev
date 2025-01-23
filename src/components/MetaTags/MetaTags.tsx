import IconMeta from '@/components/Icons/IconMeta';
import styles from './MetaTags.module.scss';

interface MetaTagsProps {
	items: string[];
}

const MetaTags = ({ items }: MetaTagsProps) => {
	return (
		<div className={styles.meta}>
			<div className={styles.iconContainer}>
				<IconMeta />
			</div>
			<ul className={styles.metaList}>
				{items?.map((item, i) => (
					<li className={styles.metaItem} key={i}>
						{item}
						{i < items.length - 1 && <span className={styles.bullet}>&#8226;</span>}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MetaTags;
