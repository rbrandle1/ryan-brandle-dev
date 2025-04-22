import styles from './CodePen.module.scss';

interface CodePenProps {
	penId: string;
	defaultTab?: string;
}

const CodePen = ({ penId, defaultTab = 'result' }: CodePenProps) => {
	return (
		<div className={styles.wrapper}>
			<p
				className='codepen'
				data-border='none'
				data-height='100%'
				data-default-tab={defaultTab}
				data-slug-hash={penId}
				data-pen-title='CodePen by Ryan Brandle'
				data-user='brandledesign'
				style={{
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '1em 0',
					padding: '1em',
				}}
			>
				<span>
					<a href={`https://codepen.io/brandledesign/pen/${penId}`}>This Pen</a> is owned by (
					<a href='https://codepen.io/brandledesign'>Ryan Brandle</a>) on <a href='https://codepen.io'>CodePen</a>.
				</span>
			</p>
		</div>
	);
};

export default CodePen;
