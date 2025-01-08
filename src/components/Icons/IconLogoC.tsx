import { IconProps } from './IconProps';

const IconLogoC = (props: IconProps) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 68 63' fill='none' {...props}>
		<path style={{ fill: 'var(--p-color-cyan-500)' }} d='M2.5 61V12.5h10v39h43V61h-53Z' />
		<mask
			id='a'
			width={44}
			height={39}
			x={12}
			y={12}
			maskUnits='userSpaceOnUse'
			style={{
				maskType: 'alpha',
			}}
		>
			<path
				style={{ fill: 'var(--p-color-black)' }}
				fillRule='evenodd'
				d='M12.01 12.107h33.788V32.13H55.81V50.9H45.8v-8.76 8.76H12.01V12.107Z'
				clipRule='evenodd'
			/>
		</mask>
		<g style={{ fill: 'var(--p-color-cyan-500)' }} mask='url(#a)'>
			<path d='M43.285 45.901a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM58.448 45.901a5.482 5.482 0 1 1-10.964 0 5.482 5.482 0 0 1 10.964 0ZM28.124 45.901a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM50.067 32.907a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM35.02 32.907a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM19.973 32.907a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM43.285 19.303a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0ZM28.124 19.303a5.482 5.482 0 1 1-10.963 0 5.482 5.482 0 0 1 10.963 0Z' />
		</g>
		<path
			style={{ fill: 'var(--p-color-black)' }}
			fillRule='evenodd'
			d='M9.818 0h48.184v19.637h9.819v33.456H9.819V0Zm4 29.456v19.637h50.003V23.637H54V4H13.819v25.456Z'
			clipRule='evenodd'
		/>
		<path
			style={{ fill: 'var(--p-color-black)' }}
			fillRule='evenodd'
			d='M0 9.819h48.184v19.637h9.818V62.91H0V9.82Zm4 29.455v19.637h50.002V33.456h-9.818V13.819H4v25.455Z'
			clipRule='evenodd'
		/>
	</svg>
);

export default IconLogoC;
