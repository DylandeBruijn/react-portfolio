// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Link
import { Link } from "react-router-dom";

// Images
import projectOneOverview from "../img/project-1-overview.png";
import projectTwoOverview from "../img/project-2-overview.png";
import projectThreeOverview from "../img/project-3-overview.png";

export const Work = () => {
	return (
		<StyledWork>
			<StyledProject>
				<h2>Project 1</h2>
				<div className="line"></div>
				<Link to="/work/project-1">
					<img src={projectOneOverview} alt="project 1" />
				</Link>
			</StyledProject>
			<StyledProject>
				<h2>Project 2</h2>
				<div className="line"></div>
				<Link to="/work/project-2">
					<img src={projectTwoOverview} alt="project 2" />
				</Link>
			</StyledProject>
			<StyledProject>
				<h2>Project 3</h2>
				<div className="line"></div>
				<Link to="/work/project-3">
					<img src={projectThreeOverview} alt="project 3" />
				</Link>
			</StyledProject>
		</StyledWork>
	);
};

const StyledWork = styled.div`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	background: white;
	h2 {
		padding: 1rem 0rem;
	}
`;

const StyledProject = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;
