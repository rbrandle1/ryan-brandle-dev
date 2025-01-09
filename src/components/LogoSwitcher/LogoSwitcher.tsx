import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import IconLogoM from '../Icons/IconLogoM';
import IconLogoC from '../Icons/IconLogoC';
import IconLogoY from '../Icons/IconLogoY';
import IconLogoP from '../Icons/IconLogoP';
import { Theme } from '@/types/themeTypes';
import styles from './LogoSwitcher.module.scss';

interface LogoSwitcherProps {
	theme: Theme;
}

const LogoSwitcher: FC<LogoSwitcherProps> = ({ theme = 'm' }) => {
	const [currentTheme, setCurrentTheme] = useState(theme);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setIsVisible(false);
		const timer = setTimeout(() => {
			setCurrentTheme(theme);
			setIsVisible(true);
		}, 100);

		return () => clearTimeout(timer);
	}, [theme]);

	return (
		<div className={styles.logoContainer}>
			<IconLogoM className={cn(styles.logo, isVisible && currentTheme === 'm' && styles.fadeIn)} aria-hidden />
			<IconLogoC className={cn(styles.logo, isVisible && currentTheme === 'c' && styles.fadeIn)} aria-hidden />
			<IconLogoP className={cn(styles.logo, isVisible && currentTheme === 'p' && styles.fadeIn)} aria-hidden />
			<IconLogoY className={cn(styles.logo, isVisible && currentTheme === 'y' && styles.fadeIn)} aria-hidden />
		</div>
	);
};

export default LogoSwitcher;
