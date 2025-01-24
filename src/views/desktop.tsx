import "@styles/desktop.scss";

import gsap from "gsap";
import React from "react";

import Services from "@/components/service";
import DesktopNav from "./desktop-navbar";
import { HTML5 } from "@/assets/icons";
import { SERVICES } from "@/assets/data/service";

export default function Page() {
	const backendIconsRef = React.useRef<HTMLDivElement | null>(null);
	const backendRef = React.useRef<HTMLElement | null>(null);
	const frontendIconsRef = React.useRef<HTMLDivElement | null>(null);
	const frontendRef = React.useRef<HTMLElement | null>(null);
	const textRef = React.useRef<HTMLElement | null>(null);

	React.useEffect(function () {
		if (
			!backendIconsRef.current ||
			!backendRef.current ||
			!frontendIconsRef.current ||
			!frontendRef.current ||
			!textRef.current
		)
			return;

		const frontendTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: frontendRef.current,
				start: "top center",
				end: "bottom 45%",
				toggleActions: "play reverse play reverse",
			},
		});
		frontendTimeline.fromTo(
			frontendIconsRef.current.children,
			{
				opacity: 0,
				y: -50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.25,
				ease: "power3.out",
			},
		);

		const backendTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: backendRef.current,
				start: "top 60%",
				toggleActions: "play reverse play reverse",
			},
		});
		backendTimeline
			.fromTo(
				textRef.current,
				{
					text: "front",
				},
				{
					text: "back",
					ease: "power2.inOut",
				},
			)
			.fromTo(
				backendIconsRef.current.children,
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.25,
					ease: "power2.inOut",
				},
				"-=0.25",
			);
	}, []);

	return (
		<section
			className="min-h-screen text-pink--100 font-space-mono"
			id="desktop"
		>
			<div className="mx-auto max-w-screen-2xl">
				<DesktopNav />

				<main className="relative grid grid-cols-2">
					<aside className="sticky top-[6.75rem] p-10 h-max space-y-40">
						<h1 className="font-black uppercase text-[10rem] leading-[8rem] text-muted-foreground">
							<span ref={textRef} />
							<br />
							<span>end</span>
						</h1>

						<section className="relative">
							<div
								ref={frontendIconsRef}
								className="absolute grid w-full grid-cols-8 gap-2"
							>
								{SERVICES.ICONS.FRONTEND.map((value, index) => (
									<span
										className="p-2.5 rounded-lg size-20 bg-zinc-900"
										key={index}
									>
										<i>{value()}</i>
									</span>
								))}
							</div>

							<div
								ref={backendIconsRef}
								className="absolute grid w-full grid-cols-8 gap-2"
							>
								{[...Array(5)].map((_, index) => (
									<span
										className="p-2.5 rounded-lg size-20 bg-zinc-900"
										key={index}
									>
										<i>
											<HTML5 />
										</i>
									</span>
								))}
							</div>
						</section>
					</aside>

					<aside className="max-h-max p-10 space-y-[10rem]">
						<article ref={frontendRef}>
							<Services type="frontend" />
						</article>

						<article ref={backendRef}>
							<Services type="backend" />
						</article>
					</aside>
				</main>
			</div>
		</section>
	);
}
