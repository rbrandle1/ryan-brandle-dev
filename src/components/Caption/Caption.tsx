import cn from 'classnames';
import IconCaption from '@/components/Icons/IconCaption';
import styles from './Caption.module.scss';

interface CaptionProps {
	className?: string;
	children: React.ReactNode;
	captionRight?: boolean;
	hasIcon?: boolean;
}

const Caption = ({ className, children, captionRight, hasIcon = true }: CaptionProps) => {
	return (
		<figcaption className={cn(styles.caption, captionRight ? styles.right : undefined, className)}>
			{hasIcon ? <IconCaption /> : null}
			<div className={styles.text}>{children}</div>
		</figcaption>
	);
};

export default Caption;
