import { IconProps } from './IconProps';

const IconCaption = (props: IconProps) => (
	<svg width='10' height='16' viewBox='0 0 10 16' xmlns='http://www.w3.org/2000/svg' {...props}>
		<g transform='skewX(-15)'>
			<line x1='8' y1='0' x2='8' y2='16' stroke='currentColor' strokeWidth='4'></line>
		</g>
	</svg>
);

export default IconCaption;
