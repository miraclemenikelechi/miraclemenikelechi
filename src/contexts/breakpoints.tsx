import React from "react";

export const BreakpointContext = React.createContext({
	mobile: 640,
	tablet: 1024,
});

export function BreakpointProvider({ children }: { children: React.ReactNode }) {
	return (
		<BreakpointContext.Provider value={{ mobile: 640, tablet: 1024 }}>
			{children}
		</BreakpointContext.Provider>
	);
}
