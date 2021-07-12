// Styled Components
import styled from "styled-components";

// UI
import { StyledSection } from "../styles";

// Framer Motion
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

// Components
import { Toggle } from "./Toggle";

export const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<StyledFaq
			variants={scrollReveal}
			ref={element}
			animate={controls}
			initial="hidden"
		>
			<h2>
				Vragen? <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="Vraag 1">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
							ipsam.
						</p>
					</div>
				</Toggle>
				<Toggle title="Vraag 2">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
							ipsam.
						</p>
					</div>
				</Toggle>
				<Toggle title="Vraag 3">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
							ipsam.
						</p>
					</div>
				</Toggle>
				<Toggle title="Vraag 4">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
							ipsam.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
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
