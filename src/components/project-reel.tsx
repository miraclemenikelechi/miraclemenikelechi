import { cn } from "../lib/utils";
import { useBreakpoint } from "../hooks/use-breakpoint";

export default function Component() {
	const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

	return (
		<article className={cn("aspect-square border border-zinc-900 rounded-lg", isMobile ? "" : "")}>
			{/* Component */}
		</article>
	);
}
