import styles from './CodePen.module.scss';
import setInlineStyles from '@/helpers/functions';

interface CodePenProps {
	penId: string;
	height?: string;
}

const CodePen = ({ penId, height }: CodePenProps) => {
	return (
		<iframe
			src={`https://codepen.io/brandledesign/embed/${penId}`}
			className={styles.codePen}
			style={setInlineStyles({
				'--height': height ? `${height}px` : null,
			})}
			title='CodePen Embed'
			loading='lazy'
			allowFullScreen={true}
		></iframe>
	);
};

export default CodePen;
