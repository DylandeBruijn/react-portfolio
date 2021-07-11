// Import React
import React from "react";

// Styled Components
import styled from "styled-components";

// Import StyledComponents
import { StyledSection, StyledDescription, StyledImage, Hide } from "../styles";

// Images
import home1 from "../img/home1.png";

export const AboutSection = () => {
	return (
		<StyledSection>
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
		</StyledSection>
	);
};
