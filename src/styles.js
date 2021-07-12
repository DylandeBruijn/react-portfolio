// Styled Components
import styled from "styled-components";

// Framer Motion
import { motion } from "framer-motion";

// AboutSection

export const StyledSection = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

export const StyledDescription = styled.div`
	flex: 1;
	padding-right: 5rem;
	z-index: 3;
	h2 {
		font-weight: lighter;
	}
`;

export const StyledImage = styled.div`
	flex: 1;
	overflow: hidden;
	z-index: 1;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export const StyledHide = styled.div`
	overflow: hidden;
`;
