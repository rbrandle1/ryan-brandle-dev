import cn from 'classnames';
import IconMeta from '@/components/Icons/IconMeta';
import styles from './MetaTags.module.scss';

interface MetaTagsProps {
	items: string[];
	iconAccent?: boolean;
}

const MetaTags = ({ items, iconAccent }: MetaTagsProps) => {
	return (
		<div className={styles.meta}>
			<div className={cn(styles.iconContainer, iconAccent && styles.iconAccent)}>
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
