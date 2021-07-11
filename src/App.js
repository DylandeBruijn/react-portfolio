// Import React Router
import { Switch, Route } from "react-router-dom";

// Import Pages
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";

// Global Style
import { GlobalStyle } from "./components/GlobalStyle";

// Components
import { Nav } from "./components/Nav";

export const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path="/" exact>
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
		</div>
	);
};
