import React from "react";

//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

//Import Images
import home2 from "../img/home2.png";

export const ServicesSection = () => {
	return (
		<div className="services">
			<div className="description">
				<h2>
					Hoge <span>kwaliteit</span> diensten
				</h2>
				<div className="cards">
					<div className="icon">
						<img src={clock} alt="icon" />
						<h3>USP 1</h3>
					</div>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="cards">
					<div className="icon">
						<img src={teamwork} alt="icon" />
						<h3>USP 2</h3>
					</div>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="cards">
					<div className="icon">
						<img src={diaphragm} alt="icon" />
						<h3>USP 3</h3>
					</div>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="cards">
					<div className="icon">
						<img src={money} alt="icon" />
						<h3>USP 4</h3>
					</div>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>
			<div className="image">
				<img src={home2} alt="camera" />
			</div>
		</div>
	);
};
