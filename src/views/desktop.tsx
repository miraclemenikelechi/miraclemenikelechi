import "@styles/desktop.scss";

import React from "react";

import Services from "@/components/service";
import DesktopNav from "./desktop-navbar";

export default function Page() {
	const frontendRef = React.useRef<HTMLElement | null>(null);
	const backendRef = React.useRef<HTMLElement | null>(null);

	const [activeSection, setActiveSection] = React.useState<"frontend" | "backend">(
		"frontend",
	);

	return (
		<section
			className="min-h-screen text-pink--100 font-space-mono"
			id="desktop"
		>
			<div className="mx-auto max-w-screen-2xl">
				<DesktopNav />

				<main className="relative grid grid-cols-2">
					<aside className="sticky top-[6.75rem] p-10 h-max">
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
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
