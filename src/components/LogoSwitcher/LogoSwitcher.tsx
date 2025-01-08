import IconLogoM from '../Icons/IconLogoM';
import IconLogoC from '../Icons/IconLogoC';

const LogoSwitcher = () => {
	const currentTheme = document.body.dataset.theme;

	return currentTheme === 'm' ? <IconLogoM /> : <IconLogoC />;
};

export default LogoSwitcher;
