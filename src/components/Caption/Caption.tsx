import cn from 'classnames';
import IconCaption from '@/components/Icons/IconCaption';
import styles from './Caption.module.scss';

interface CaptionProps {
	className?: string;
	children: React.ReactNode;
	captionLeft?: boolean;
	hasIcon?: boolean;
}

const Caption = ({ className, children, captionLeft, hasIcon = true }: CaptionProps) => {
	return (
		<figcaption className={cn(styles.caption, captionLeft ? styles.left : undefined, className)}>
			{hasIcon ? <IconCaption /> : null}
			<div className={cn(styles.text, hasIcon && styles.hasIcon)}>{children}</div>
		</figcaption>
	);
};

export default Caption;
