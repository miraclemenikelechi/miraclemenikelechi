import "@styles/desktop.scss";

import DesktopNav from "./desktop-navbar";
import RenderServices from "./desktop-services";

export default function Page() {
	return (
		// <section className="w-screen h-screen text-pink--100 font-space-mono">
		// 	<div
		// 		className="relative mx-auto max-w-screen-2xl"
		// 		id="desktop"
		// 	>
		// 		{/* <DesktopNav /> */}

		// 		<aside className="p-10 border">
		// 			<h1>front</h1>
		// 			<h1>back</h1>
		// 			<h1>end</h1>

		// 			<h2>01</h2>
		// 			<h2>02</h2>
		// 		</aside>

		// 		<aside className="p-10 space-y-[10rem]">
		// 			<RenderServices />
		// 		</aside>
		// 	</div>
		// </section>

		<section
			className="min-h-screen text-pink--100 font-space-mono"
			id="desktop"
		>
			<div className="mx-auto max-w-screen-2xl">
				<DesktopNav />

				<main className="relative grid grid-cols-2">
					<aside className="sticky top-[6.75rem] p-10 max-h-max">
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
						<p>hello</p>
					</aside>

					<aside className="max-h-max p-10 space-y-[10rem]">
						<RenderServices />
					</aside>
				</main>
			</div>
		</section>
	);
}
