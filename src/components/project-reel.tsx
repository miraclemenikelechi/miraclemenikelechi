import "@styles/project-reel.scss";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { cn } from "../lib/utils";

export default function Component() {
	const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

	return (
		<article
			className={cn(
				"aspect-square border border-zinc-900 rounded-lg",
				isMobile ? "" : "",
			)}
			id="project-reel"
		>
			{/* Component */}
		</article>
	);
}
