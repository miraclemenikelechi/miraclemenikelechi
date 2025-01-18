import React from "react";
import { useBreakpoint } from "./hooks/use-breakpoint";

const DesktopView = React.lazy(() => import("./views/desktop"));
const MobileView = React.lazy(() => import("./views/mobile"));

export default function AWOLOWO() {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			{useBreakpoint({ bp: "tablet", type: "max" }) ? (
				<MobileView />
			) : (
				<DesktopView />
			)}
		</React.Suspense>
	);
}
