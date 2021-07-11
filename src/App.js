// Import Pages
import { AboutUs } from "./pages/AboutUs";

// Global Style
import { GlobalStyle } from "./components/GlobalStyle";

// Components
import { Nav } from "./components/Nav";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AboutUs />
		</div>
	);
}

export default App;
