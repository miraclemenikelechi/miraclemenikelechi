import Lenis from "lenis";
import React from "react";
import { useBreakpoint } from "./hooks/use-breakpoint";

const DesktopView = React.lazy(() => import("./views/desktop"));
const MobileView = React.lazy(() => import("./views/mobile"));

export default function AWOLOWO() {
	React.useEffect(function () {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	const fallback = (
		<div className="flex items-center justify-center h-screen text-xs font-space-mono">
			Hello WOrld ;)
		</div>
	);

	return (
		<React.Suspense fallback={fallback}>
			{useBreakpoint({ bp: "tablet", type: "max" }) ? (
				<MobileView />
			) : (
				<DesktopView />
			)}
		</React.Suspense>
	);
}
