import { FC } from 'react';
import IconLogoM from '../Icons/IconLogoM';
import IconLogoC from '../Icons/IconLogoC';
import IconLogoY from '../Icons/IconLogoY';
import IconLogoP from '../Icons/IconLogoP';
import { Theme } from '@/types/themeTypes';

interface LogoSwitcherProps {
	theme: Theme;
}

const LogoSwitcher: FC<LogoSwitcherProps> = ({ theme = 'm' }) => {
	const logos = {
		m: <IconLogoM aria-hidden />,
		c: <IconLogoC aria-hidden />,
		p: <IconLogoP aria-hidden />,
		y: <IconLogoY aria-hidden />,
	};

	return logos[theme];
};

export default LogoSwitcher;
