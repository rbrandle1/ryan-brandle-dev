'use client';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import IconLogoM from '@/components/Icons/IconLogoM';
import IconLogoC from '@/components/Icons/IconLogoC';
import IconLogoY from '@/components/Icons/IconLogoY';
import IconLogoP from '@/components/Icons/IconLogoP';
import { useTheme } from '@/components/ThemeProvider/ThemeProvider';
import styles from './LogoSwitcher.module.scss';

const LogoSwitcher = () => {
	const { theme } = useTheme();
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
