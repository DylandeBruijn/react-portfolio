import React from "react";

// Images
import home1 from "../img/home1.png";

//Styled
import styled from "styled-components";

export const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<div className="title">
					<Hide>
						<h2>Creatieve duizendpoot</h2>
					</Hide>
					<Hide>
						<h2>
							met <span>passie</span> voor
						</h2>
					</Hide>
					<Hide>
						<h2>de digitale wereld</h2>
					</Hide>
				</div>
				<p>
					Neem contact op om te informeren wat ik voor u of uw bedrijf kan
					betekenen!
				</p>
				<button>Contact</button>
			</StyledDescription>
			<StyledImage>
				<img src={home1} alt="guy with a camera" />
			</StyledImage>
		</StyledAbout>
	);
};

// Styled Component
const StyledAbout = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

const StyledDescription = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;

const StyledImage = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;
