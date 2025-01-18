import React from "react";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { ALPHABETS } from "../lib/constants";
import { cn } from "../lib/utils";

export default function Component() {
	const isMobile = useBreakpoint({ bp: "mobile", type: "max" });
	const usernameRef = React.useRef<HTMLHeadingElement | null>(null);

	React.useLayoutEffect(function () {
		let iterations = 0;

		if (usernameRef.current) {
			const username = usernameRef.current.dataset.username;
			if (!username) return;

			const interval = setInterval(function () {
				if (!usernameRef.current) {
					clearInterval(interval);
					return;
				}

				usernameRef.current.innerText = username
					.split("")
					.map(function (_: string, index: number) {
						if (index < iterations) return username[index];

						return ALPHABETS
							.LETTERS[Math.floor(Math.random() * ALPHABETS.TOTAL)];
					})
					.join("");

				iterations += 1 / 3;
				if (iterations > username.length) {
					clearInterval(interval);
				}
			}, 25);
		}
	}, []);

	return (
		<>
			<h1
				className={cn("font-bold py-4")}
				data-username="miraclemenikelechi"
				ref={usernameRef}
				style={{
					fontSize: `clamp(0.25rem, 6vw, 3rem)`,
				}}
			>
				miraclemenikelechi
			</h1>
		</>
	);
}
