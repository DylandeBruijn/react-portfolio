// React
import React from "react";

// Images
import home1 from "../img/home1.png";

export const AboutSection = () => {
	return (
		<div>
			<div className="description">
				<div className="title">
					<div className="hide">
						<h2>Creatieve duizendpoot</h2>
					</div>
					<div className="hide">
						<h2>
							met <span>passie</span> voor
						</h2>
					</div>
					<div className="hide">
						<h2>de digitale wereld</h2>
					</div>
				</div>
				<p>
					Neem contact op om te informeren wat ik voor u of uw bedrijf kan
					betekenen!
				</p>
				<button>Contact</button>
			</div>
			<div className="image">
				<img src={home1} alt="guy with a camera" />
			</div>
		</div>
	);
};
