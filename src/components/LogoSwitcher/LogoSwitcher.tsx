import { FC } from 'react';
import IconLogoM from '../Icons/IconLogoM';
import IconLogoC from '../Icons/IconLogoC';
import IconLogoY from '../Icons/IconLogoY';
import { Theme } from '@/types/themeTypes';

interface LogoSwitcherProps {
	theme: Theme;
}

//Make sure to include accessibility attributes for the logo switcher

const LogoSwitcher: FC<LogoSwitcherProps> = ({ theme = 'm' }) => {
	const logos = {
		m: <IconLogoM aria-hidden />,
		c: <IconLogoC aria-hidden />,
		y: <IconLogoY aria-hidden />,
	};

	return logos[theme];
};

export default LogoSwitcher;
