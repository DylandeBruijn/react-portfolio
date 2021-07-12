// UI
import {
	StyledSection,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, photoAnimation, fade } from "../animation";

// SVG
import { Wave } from "./Wave";

// Images
import homeMain from "../img/home-main.png";

export const AboutSection = () => {
	return (
		<>
			<StyledSection>
				<StyledDescription>
					<motion.div>
						<StyledHide>
							<motion.h2 variants={titleAnimation}>
								Creatieve duizendpoot
							</motion.h2>
						</StyledHide>
						<StyledHide>
							<motion.h2 variants={titleAnimation}>
								met <span>passie</span> voor
							</motion.h2>
						</StyledHide>
						<StyledHide>
							<motion.h2 variants={titleAnimation}>
								de digitale wereld
							</motion.h2>
						</StyledHide>
					</motion.div>
					<motion.p variants={fade}>
						Neem contact op om te informeren wat ik voor u of uw bedrijf kan
						betekenen!
					</motion.p>
					<motion.button variants={fade}>Contact</motion.button>
				</StyledDescription>
				<StyledImage>
					<motion.img
						variants={photoAnimation}
						src={homeMain}
						alt="guy with a camera"
					/>
				</StyledImage>
				<Wave />
			</StyledSection>
		</>
	);
};
