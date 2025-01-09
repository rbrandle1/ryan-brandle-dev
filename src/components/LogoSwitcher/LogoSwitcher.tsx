import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import IconLogoM from '@/components/Icons/IconLogoM';
import IconLogoC from '@/components/Icons/IconLogoC';
import IconLogoY from '@/components/Icons/IconLogoY';
import IconLogoP from '@/components/Icons/IconLogoP';
import { Theme } from '@/types/themeTypes';
import styles from './LogoSwitcher.module.scss';

interface LogoSwitcherProps {
	theme: Theme;
}

const LogoSwitcher: FC<LogoSwitcherProps> = ({ theme = 'm' }) => {
	const [currentTheme, setCurrentTheme] = useState(theme);
	const [isVisible, setIsVisible] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		setIsVisible(false);
		setIsFadingOut(true);
		const timer = setTimeout(() => {
			setCurrentTheme(theme);
			setIsVisible(true);
			setIsFadingOut(false);
		}, 100);

		return () => clearTimeout(timer);
	}, [theme]);

	return (
		<div className={styles.logoContainer}>
			<IconLogoM
				className={cn(styles.logo, isVisible && currentTheme === 'm' && styles.fadeIn, isFadingOut && styles.fadeOut)}
				aria-hidden
			/>
			<IconLogoC
				className={cn(styles.logo, isVisible && currentTheme === 'c' && styles.fadeIn, isFadingOut && styles.fadeOut)}
				aria-hidden
			/>
			<IconLogoP
				className={cn(styles.logo, isVisible && currentTheme === 'p' && styles.fadeIn, isFadingOut && styles.fadeOut)}
				aria-hidden
			/>
			<IconLogoY
				className={cn(styles.logo, isVisible && currentTheme === 'y' && styles.fadeIn, isFadingOut && styles.fadeOut)}
				aria-hidden
			/>
		</div>
	);
};

export default LogoSwitcher;
