import "@styles/desktop.scss";

import gsap from "gsap";
import React from "react";

import Services from "@/components/service";
import DesktopNav from "./desktop-navbar";

export default function Page() {
	const backendRef = React.useRef<HTMLElement | null>(null);
	const frontendRef = React.useRef<HTMLElement | null>(null);
	const textRef = React.useRef<HTMLHeadingElement | null>(null);

	React.useEffect(function () {
		gsap.timeline({
			scrollTrigger: {
				trigger: frontendRef.current,
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					if (textRef.current)
						gsap.to(textRef.current, { text: "Frontend", duration: 0.5 });
				},

				onLeaveBack: () => {
					if (textRef.current)
						gsap.to(textRef.current, { text: "Frontend", duration: 0.5 });
				},
			},
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: backendRef.current,
				start: "top center",
				end: "bottom center",
				onEnter: () => {
					if (textRef.current)
						gsap.to(textRef.current, { text: "Backend", duration: 0.5 });
				},
				onLeaveBack: () => {
					if (textRef.current)
						gsap.to(textRef.current, { text: "Backend", duration: 0.5 });
				},
			},
		});
	}, []);

	return (
		<section
			className="min-h-screen text-pink--100 font-space-mono"
			id="desktop"
		>
			<div className="mx-auto max-w-screen-2xl">
				<DesktopNav />

				<main className="relative grid grid-cols-2">
					<aside className="sticky top-[6.75rem] p-10 h-max">
						<h1 ref={textRef}>frontend</h1>
					</aside>

					<aside className="max-h-max p-10 space-y-[10rem]">
						<article
							ref={frontendRef}
							data-section="frontend"
						>
							<Services type="frontend" />
						</article>

						<article
							ref={backendRef}
							data-section="backend"
						>
							<Services type="backend" />
						</article>
					</aside>
				</main>
			</div>
		</section>
	);
}
