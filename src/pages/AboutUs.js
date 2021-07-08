import React from "react";

//Page Components
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { FaqSection } from "../components/FaqSection";

export const AboutUs = () => {
	return (
		<>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</>
	);
};
