// UI
import {
	StyledSection,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";

// Framer Motion
import { motion } from "framer-motion";

// Images
import homeMain from "../img/home-main.png";

export const AboutSection = () => {
	return (
		<StyledSection>
			<StyledDescription>
				<motion.div>
					<StyledHide>
						<motion.h2>Creatieve duizendpoot</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2>
							met <span>passie</span> voor
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2>de digitale wereld</motion.h2>
					</StyledHide>
				</motion.div>
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
