// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const Contact = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			style={{ background: "#fff" }}
		>
			<h1>Contact</h1>
		</motion.div>
	);
};
