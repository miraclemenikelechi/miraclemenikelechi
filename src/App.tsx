import IntroText from "./components/ui/intro-text";
import NavMenuButton from "./components/ui/nav-menu-button";

export default function App() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-purple--100 App">
			<header>hello world</header>
			<NavMenuButton />
			<IntroText />
		</div>
	);
}
