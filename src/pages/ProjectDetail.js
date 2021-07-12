// React
import React, { useState, useEffect } from "react";

// React Router
import { useHistory } from "react-router";

// Projects
import { ProjectState } from "../projectState";

// Styled Components
import styled from "styled-components";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// Scroll Top
import { ScrollTop } from "../components/ScrollTop";

export const ProjectDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [projects, setProjects] = useState(ProjectState);
	const [project, setProject] = useState(null);

	// UseEffect
	useEffect(() => {
		const currentProject = projects.filter((project) => project.url === url);
		setProject(currentProject[0]);
	}, [projects, url]);
	return (
		<StyledDetails
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<StyledHeadLine>
				<h2>{project?.title}</h2>
				<img src={project?.mainImg} alt="project" />
			</StyledHeadLine>
			<StyledFeatures>
				{project?.features.map((feature) => (
					<Feature
						title={feature.title}
						description={feature.description}
						key={feature.title}
					/>
				))}
			</StyledFeatures>
			<StyledImageDisplay>
				<img src={project?.secondaryImg} alt="project" />
			</StyledImageDisplay>
			<ScrollTop />
		</StyledDetails>
	);
};

const StyledDetails = styled(motion.div)`
	color: white;
`;

const StyledHeadLine = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const StyledFeatures = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
`;

const StyledFeature = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 75%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

const StyledImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

const Feature = ({ title, description }) => {
	return (
		<StyledFeature>
			<h3>{title}</h3>
			<div className="line"></div>
			<p>{description}</p>
		</StyledFeature>
	);
};
