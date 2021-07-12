// Styled Components
import styled from "styled-components";

// UI
import { StyledSection } from "../styles";

export const FaqSection = () => {
	return (
		<StyledFaq>
			<h2>
				Vragen? <span>FAQ</span>
			</h2>
			<div className="question">
				<h4>Vraag 1</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
						ipsam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Vraag 2</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
						ipsam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Vraag 3</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
						ipsam.
					</p>
				</div>
			</div>
			<div className="question">
				<h4>Vraag 4</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
						ipsam.
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
		</StyledFaq>
	);
};

const StyledFaq = styled(StyledSection)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100% auto;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 1rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;
