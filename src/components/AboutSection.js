// Import React
import React from "react";

// Styled Components
import styled from "styled-components";

// Import StyledComponents
import {
	StyledSection,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";

// Images
import homeMain from "../img/home-main.png";

export const AboutSection = () => {
	return (
		<StyledSection>
			<StyledDescription>
				<div className="title">
					<StyledHide>
						<h2>Creatieve duizendpoot</h2>
					</StyledHide>
					<StyledHide>
						<h2>
							met <span>passie</span> voor
						</h2>
					</StyledHide>
					<StyledHide>
						<h2>de digitale wereld</h2>
					</StyledHide>
				</div>
				<p>
					Neem contact op om te informeren wat ik voor u of uw bedrijf kan
					betekenen!
				</p>
				<button>Contact</button>
			</StyledDescription>
			<StyledImage>
				<img src={homeMain} alt="guy with a camera" />
			</StyledImage>
		</StyledSection>
	);
};
