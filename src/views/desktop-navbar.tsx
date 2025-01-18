import { cn } from "../lib/utils";

export default function Component() {
	return (
		<header
			className={cn(
				"sticky top-0 w-full flex items-center justify-between p-10",
				"col-start-1 col-end-3",
			)}
		>
			<aside className="text-xl">How could I be of service to you? :)</aside>
			<aside className="text-lg">Let's work together</aside>
		</header>
	);
}
