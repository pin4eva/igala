import React from "react";
import styled from "styled-components";

const AdvertisementLandScape = (): JSX.Element => {
	return (
		<AdvertisementWrapper>
			<section className="container"></section>
		</AdvertisementWrapper>
	);
};

export default AdvertisementLandScape;

const AdvertisementWrapper = styled.div`
	section {
		max-height: 16.375rem;
		width: 100%;
		min-height: 16rem;
		background-color: #ccc;
	}
`;

export const AdvertisementPortrait = (): JSX.Element => {
	return (
		<AdvertisementPortraitWrapper className="container"></AdvertisementPortraitWrapper>
	);
};

const AdvertisementPortraitWrapper = styled.div`
	width: 100%;
	max-width: 13rem;
	height: inherit;
	background-color: #ccc;
`;
