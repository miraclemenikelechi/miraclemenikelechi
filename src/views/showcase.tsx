import "@styles/showcase.scss";
import ProjectReel from "../components/project-reel";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { cn } from "../lib/utils";

export default function Component() {
	const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

	return (
		<section
			className={cn(
				"flex-1 mx-auto my-4 max-w-screen-2xl gap-4 px-4",
				isMobile ? "showcase--mobile" : "showcase--desktop",
			)}
			id="showcase"
		>
			{[...Array(6)].map(function () {
				return <ProjectReel />;
			})}
		</section>
	);
}
