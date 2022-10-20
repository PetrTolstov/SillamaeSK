const Cross = ({width, height}: { width: number, height: number }) => {
	return (
		<svg width={`${width}px`} height={`${height}px`} viewBox='0 0 23 23' fill='black' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M2.53509 0.949721C2.00255 0.417188 1.13915 0.417188 0.606615 0.94972C0.0740818 1.48225 0.0740818 2.34566 0.606615 2.87819L9.28471 11.5563L0.606571 20.2344C0.0740376 20.767 0.074038 21.6304 0.606571 22.1629C1.1391 22.6954 2.00251 22.6954 2.53504 22.1629L11.2132 13.4848L19.8913 22.1629C20.4239 22.6955 21.2873 22.6955 21.8198 22.1629C22.3523 21.6304 22.3523 20.767 21.8198 20.2345L13.1417 11.5563L21.8198 2.87818C22.3523 2.34564 22.3523 1.48224 21.8198 0.949703C21.2872 0.41717 20.4238 0.41717 19.8913 0.949703L11.2132 9.62782L2.53509 0.949721Z'
				fill='#002B5C'
			/>
		</svg>
	);
};

export default Cross;