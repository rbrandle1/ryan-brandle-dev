'use client';
import cn from 'classnames';
import { useTheme } from '@/components/ThemeProvider/ThemeProvider';
// import IconDroplet from '@/components/Icons/IconDroplet';
import IconBucket from '@/components/Icons/IconBucket';
import styles from './ThemePicker.module.scss';

interface ThemePickerProps {
	className?: string;
}

const ThemePicker = ({ className }: ThemePickerProps) => {
	const { theme, setTheme } = useTheme();

	return (
		<fieldset className={cn(styles.themePicker, className)}>
			<legend>Choose a theme:</legend>
			<div className={styles.options} role='radiogroup' aria-label='Select a theme'>
				<label htmlFor='magenta-theme'>
					<span>Magenta</span>
					<input
						className={styles.m}
						type='radio'
						id='magenta-theme'
						name='theme'
						value='m'
						checked={theme === 'm'}
						onChange={() => setTheme('m')}
					/>
				</label>
				<label htmlFor='cyan-theme'>
					<span>Cyan</span>
					<input
						className={styles.c}
						type='radio'
						id='cyan-theme'
						name='theme'
						value='c'
						checked={theme === 'c'}
						onChange={() => setTheme('c')}
					/>
				</label>
				<label htmlFor='purple-theme'>
					<span>Purple</span>
					<input
						className={styles.p}
						type='radio'
						id='purple-theme'
						name='theme'
						value='p'
						checked={theme === 'p'}
						onChange={() => setTheme('p')}
					/>
				</label>
				<label htmlFor='yellow-theme'>
					<span>Yellow</span>
					<input
						className={styles.y}
						type='radio'
						id='yellow-theme'
						name='theme'
						value='y'
						checked={theme === 'y'}
						onChange={() => setTheme('y')}
					/>
				</label>
			</div>
			<div className={styles.icon}>
				{/* <IconDroplet aria-hidden /> */}
				<IconBucket aria-hidden />
			</div>
		</fieldset>
	);
};

export default ThemePicker;
