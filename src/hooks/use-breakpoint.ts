import React from "react";
import { BreakpointKey, BreakpointType } from "../types";

export const BreakpointContext = React.createContext({
	mobile: 640,
	tablet: 1024,
});

function Breakpoints() {
	return React.useContext(BreakpointContext);
}

interface useBreakpointProps {
	bp: BreakpointKey | number;
	type: BreakpointType;
}

export function useBreakpoint({ bp, type }: useBreakpointProps) {
	const breakPoints = Breakpoints();

	const isCustomBreakpoint = typeof bp === "number";
	const breakPointValue = isCustomBreakpoint ? bp : breakPoints[bp];

	const [isMatched, setIsMatched] = React.useState<boolean>(false);

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
