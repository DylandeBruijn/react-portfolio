// Styled Components
import styled from "styled-components";

// React Router
import { Link } from "react-router-dom";

// Animations
import { motion } from "framer-motion";
import {
	pageAnimation,
	fade,
	photoAnimation,
	lineAnimation,
	sliderContainer,
	slider,
	scrollReveal,
} from "../animation";
import { useScroll } from "../components/useScroll";

// Images
import projectOneOverview from "../img/project-1-overview.png";
import projectTwoOverview from "../img/project-2-overview.png";
import projectThreeOverview from "../img/project-3-overview.png";

export const Work = () => {
	const [element, controls] = useScroll();
	const [element2, controls2] = useScroll();
	return (
		<StyledWork
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			layout="position"
			style={{ background: "#fff" }}
		>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<StyledProject>
				<motion.h2 variants={fade}>Project 1</motion.h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/project-1">
					<StyledHide>
						<motion.img
							variants={photoAnimation}
							src={projectOneOverview}
							alt="project 1"
						/>
					</StyledHide>
				</Link>
			</StyledProject>
			<StyledProject variants={scrollReveal} ref={element} animate={controls}>
				<h2>Project 2</h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/project-2">
					<img src={projectTwoOverview} alt="project 2" />
				</Link>
			</StyledProject>
			<StyledProject variants={scrollReveal} ref={element2} animate={controls2}>
				<h2 variants={fade}>Project 3</h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Link to="/work/project-3">
					<img src={projectThreeOverview} alt="project 3" />
				</Link>
			</StyledProject>
		</StyledWork>
	);
};

const StyledWork = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	background: white;
	h2 {
		padding: 1rem 0rem;
	}
`;

const StyledProject = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const StyledHide = styled.div`
	overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fffebf;
	z-index: 5;
`;
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`;
