import "@styles/app.scss";
import NavigationBar from "./views/navigation-bar";
import Showcase from "./views/showcase";

export default function App() {
	return (
		<section
			className="min-h-screen bg-black text-purple--100"
			id="app"
		>
			<header>
				<NavigationBar />
			</header>

			<main hidden>todo later</main>

			<footer>
				<Showcase />
			</footer>
		</section>
	);
}
