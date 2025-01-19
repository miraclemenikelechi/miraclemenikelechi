import "@styles/desktop.scss";

import gsap from "gsap";
import React from "react";

import Services from "@/components/service";
import DesktopNav from "./desktop-navbar";
import { HTML } from "@/assets/icons";

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

		// Frontend text animation
		const frontendTextTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: frontendRef.current,
				start: "top center",
				end: "bottom 60%",
				toggleActions: "play reverse play reverse",
			},
		});
		frontendTextTimeline.to(textRef.current, {
			text: "front",
			duration: 0.5,
			ease: "power2.out",
		});

		// Frontend icons animation
		const frontendIconsTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: frontendRef.current,
				start: "top center",
				end: "bottom 60%",
				toggleActions: "play reverse play reverse",
			},
		});
		frontendIconsTimeline.fromTo(
			frontendIconsRef.current.children,
			{ opacity: 0, x: -50 },
			{ opacity: 1, x: 0, duration: 0.5, ease: "power3.inOut", stagger: 0.05 },
		);

		// Backend text animation
		const backendTextTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: backendRef.current,
				start: "top 60%",
				toggleActions: "play reverse play reverse",
			},
		});
		backendTextTimeline.to(textRef.current, {
			text: "back",
			duration: 0.5,
			ease: "power2.in",
		});

		// Backend icons animation
		const backendIconsTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: backendRef.current,
				start: "top 60%",
				toggleActions: "play reverse play reverse",
			},
		});
		backendIconsTimeline.fromTo(
			backendIconsRef.current.children,
			{ opacity: 0, x: 50 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				ease: "power3.inOut",
				stagger: 0.05,
			},
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
							<span ref={textRef}>front</span>
							<br />
							<span>end</span>
						</h1>

						<section className="relative">
							<div
								ref={frontendIconsRef}
								className="absolute flex w-full"
							>
								{[...Array(5)].map((_, index) => (
									<i
										className="size-20"
										key={index}
									>
										<HTML />
									</i>
								))}
							</div>

							<div
								ref={backendIconsRef}
								className="absolute flex w-full border"
							>
								{[...Array(5)].map((_, index) => (
									<i
										className="size-20"
										key={index}
									>
										<HTML />
									</i>
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
