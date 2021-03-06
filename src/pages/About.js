// UI
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSection } from "../components/FaqSection";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// Scroll Top
import { ScrollTop } from "../components/ScrollTop";

export const About = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
			<ScrollTop />
		</motion.div>
	);
};
