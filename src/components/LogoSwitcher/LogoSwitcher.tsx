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
		}, 500);

		return () => clearTimeout(timer);
	}, [theme]);

	const logos = {
		m: <IconLogoM className={cn(styles.logo, isVisible && styles.fadeIn)} aria-hidden />,
		c: <IconLogoC className={cn(styles.logo, isVisible && styles.fadeIn)} aria-hidden />,
		p: <IconLogoP className={cn(styles.logo, isVisible && styles.fadeIn)} aria-hidden />,
		y: <IconLogoY className={cn(styles.logo, isVisible && styles.fadeIn)} aria-hidden />,
	};

	return <div className={styles.logoContainer}>{logos[currentTheme]}</div>;
};

export default LogoSwitcher;
