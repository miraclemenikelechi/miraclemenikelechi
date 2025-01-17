import React from "react";

import { BreakpointContext } from "../contexts/breakpoints";

function Breakpoints() {
	return React.useContext(BreakpointContext);
}

type BreakpointKeys = "mobile" | "tablet";

export function useBreakpoint({
	bp,
	type,
}: {
	bp: BreakpointKeys | number;
	type: "min" | "max";
}) {
	const breakPoints = Breakpoints();

	const isCustomBreakpoint = typeof bp === "number";
	const breakPointValue = isCustomBreakpoint ? bp : breakPoints[bp];

	const [isMatched, setIsMatched] = React.useState(false);

	React.useEffect(
		function () {
			const mediaQuery =
				type === "min"
					? `(min-width: ${breakPointValue}px)`
					: `(max-width: ${breakPointValue}px)`;

			const mediaQueryList = window.matchMedia(mediaQuery);

			function handleChange(event: MediaQueryListEvent): void {
				setIsMatched(event.matches);
			}

			setIsMatched(mediaQueryList.matches);
			mediaQueryList.addEventListener("change", handleChange);

			return function () {
				mediaQueryList.removeEventListener("change", handleChange);
			};
		},
		[breakPointValue, type],
	);

	return isMatched;
}
