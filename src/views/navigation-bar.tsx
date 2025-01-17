import { useBreakpoint } from "../hooks/use-breakpoint";
import { cn } from "../lib/utils";

export default function Component() {
	const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

	return (
		<section className="flex items-center justify-center border-b border-b-zinc-900">
			<h1 className={cn("font-bold py-4", isMobile ? "text-3xl" : "text-6xl")}>
				miraclemenikelechi
			</h1>
		</section>
	);
}
