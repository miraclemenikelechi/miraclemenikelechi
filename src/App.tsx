import "@styles/app.scss";
import NavigationBar from "./views/navigation-bar";
import Showcase from "./views/showcase";

export default function App() {
	return (
		<section
			className="relative min-h-screen mx-auto text-purple--100 font-space-mono"
			id="app"
		>
			<header className="sticky top-0 bg-black border-b border-b-zinc-900">
				<NavigationBar />
			</header>

			<main hidden>todo later</main>

			<footer>
				<Showcase />
			</footer>
		</section>
	);
}
