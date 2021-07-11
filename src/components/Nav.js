// Import React
import React from "react";

// Styled Components
import styled from "styled-components";

export const Nav = () => {
	return (
		<StyledNav>
			<h1>
				<a href="logo">Logo</a>
			</h1>
			<ul>
				<li>
					<a href="#">Over</a>
				</li>
				<li>
					<a href="#">Werk</a>
				</li>
				<li>
					<a href="#">Contact</a>
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
