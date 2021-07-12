// Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// Images
import homeSecondary from "../img/home-secondary.png";

// Styled Components
import styled from "styled-components";

// Framer Motion
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

// UI
import { StyledSection, StyledDescription, StyledImage } from "../styles";

export const ServicesSection = () => {
	const [element, controls] = useScroll();
	return (
		<StyledServices
			variants={scrollReveal}
			animate={controls}
			ref={element}
			initial="hidden"
		>
			<StyledDescription>
				<StyledCards>
					<StyledCard>
						<div className="icon">
							<img src={clock} alt="icon" />
							<h3>USP 1</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>
					<StyledCard>
						<div className="icon">
							<img src={teamwork} alt="icon" />
							<h3>USP 2</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>
					<StyledCard>
						<div className="icon">
							<img src={diaphragm} alt="icon" />
							<h3>USP 3</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>
					<StyledCard>
						<div className="icon">
							<img src={money} alt="icon" />
							<h3>USP 4</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</StyledCard>
				</StyledCards>
			</StyledDescription>
			<StyledImage>
				<img src={homeSecondary} alt="camera" />
			</StyledImage>
		</StyledServices>
	);
};

const StyledServices = styled(StyledSection)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledCard = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: white;
			color: black;
			padding: 1rem;
		}
	}
`;
