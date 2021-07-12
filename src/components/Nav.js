// React Router
import { NavLink } from "react-router-dom";

// Styled Components
import styled from "styled-components";

export const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<NavLink to="/" id="logo">
					Logo
				</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink to="/about">Over</NavLink>
				</li>
				<li>
					<NavLink to="/work">Werk</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #282828;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	#logo {
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
`;
