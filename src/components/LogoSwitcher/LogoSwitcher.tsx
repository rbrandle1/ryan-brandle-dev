import IconLogoM from '../Icons/IconLogoM';
import IconLogoC from '../Icons/IconLogoC';
import { FC } from 'react';

interface LogoSwitcherProps {
	theme: string;
}

//Make sure to include accessibility attributes for the logo switcher

const LogoSwitcher: FC<LogoSwitcherProps> = ({ theme }) => {
	return theme === 'm' ? <IconLogoM /> : <IconLogoC />;
};

export default LogoSwitcher;
