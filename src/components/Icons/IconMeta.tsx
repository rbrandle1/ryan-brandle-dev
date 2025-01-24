import { IconProps } from './IconProps';

const IconMeta = (props: IconProps) => (
	<svg width='29' height='12' viewBox='0 0 29 12' xmlns='http://www.w3.org/2000/svg' {...props}>
		<g transform='skewX(-15)'>
			<line x1='7' y1='0' x2='7' y2='12' stroke='var(--icon-accent)' strokeWidth='4'></line>
			<line x1='16' y1='0' x2='16' y2='12' stroke='var(--icon-accent)' strokeWidth='4'></line>
			<line x1='25' y1='0' x2='25' y2='12' stroke='var(--icon-accent)' strokeWidth='4'></line>
		</g>
	</svg>
);

export default IconMeta;
