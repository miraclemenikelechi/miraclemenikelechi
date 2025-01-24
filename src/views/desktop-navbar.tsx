import { iLink } from "@/types";
import { cn } from "@/lib/utils";

export default function Component() {
	const contactLinks: iLink[] = [
		{ href: "https://www.x.com/trinityandtruth", title: "X" },
		{ href: "https://www.linkedin.com/in/miraclemenikelechi/", title: "LinkedIn" },
		{ href: "https://www.codepen.io/miraclemenikelechi", title: "CodePen" },
	];

	return (
		<header
			className={cn(
				"sticky top-0 w-full flex items-center justify-between p-10",
				"col-start-1 col-end-3",
			)}
		>
			<aside className="text-lg">hi, i'm miracle emenike kelechi </aside>

			<aside className="space-x-2">
				{contactLinks.map(function ({ title, href }, index) {
					return (
						<a
							href={href}
							key={index}
							target="_blank"
						>
							[{title}]
						</a>
					);
				})}
			</aside>
		</header>
	);
}
