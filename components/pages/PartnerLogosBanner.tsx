import React from 'react';

const PartnerLogosBanner: React.FC = () => {
	const images: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-around',
		marginBottom: '1em',
	};

	return (
		<div style={images}>
			<img src={'/images/partners/africa-cdc.svg'} />
			<img src={'/images/partners/african-union.svg'} />
		</div>
	);
};

export default PartnerLogosBanner;
