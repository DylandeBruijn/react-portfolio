// Import React Router
import { Switch, Route, useLocation } from "react-router-dom";

// Import Pages
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";

// Global Style
import { GlobalStyle } from "./components/GlobalStyle";

// Animation
import { AnimatePresence } from "framer-motion";

// Components
import { Nav } from "./components/Nav";

export const App = () => {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/work" exact>
						<Work />
					</Route>
					<Route path="/work/:id">
						<ProjectDetail />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
};
