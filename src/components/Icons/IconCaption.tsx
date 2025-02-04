import { IconProps } from './IconProps';

const IconCaption = (props: IconProps) => (
	<svg width='20' height='48' viewBox='0 0 20 48' xmlns='http://www.w3.org/2000/svg' {...props}>
		<g transform='skewX(-15)'>
			<line x1='16' y1='0' x2='16' y2='48' stroke='currentColor' strokeWidth='4'></line>
		</g>
	</svg>
);

export default IconCaption;
