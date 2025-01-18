import "@styles/desktop.scss";

import gsap from "gsap";
import React from "react";

import Services from "@/components/service";
import DesktopNav from "./desktop-navbar";

export default function Page() {
	const backendRef = React.useRef<HTMLElement | null>(null);
	const frontendRef = React.useRef<HTMLElement | null>(null);
	const textRef = React.useRef<HTMLElement | null>(null);

	React.useEffect(function () {
		gsap.timeline({
			scrollTrigger: {
				trigger: frontendRef.current,
				start: "top center",
				end: "bottom 60%",
				toggleActions: "play reverse play reverse",
			},
		}).to(textRef.current, { text: "front", duration: 0.5, ease: "power2.out" });

		gsap.timeline({
			scrollTrigger: {
				trigger: backendRef.current,
				start: "top 60%",
				toggleActions: "play reverse play reverse",
			},
		}).to(textRef.current, { text: "back", duration: 0.5, ease: "power2.in" });
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
						<h1 className="font-black uppercase text-[10rem] leading-[8rem] text-muted-foreground">
							<span ref={textRef}>front</span>
							<br />
							<span>end</span>
						</h1>
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
