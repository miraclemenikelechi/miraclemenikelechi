import { SERVICES } from "@/assets/data/service";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Service } from "@/types";

interface RenderServicesProps {
	type: "frontend" | "backend";
}

export default function Component({ type }: RenderServicesProps) {
	const services = type === "frontend" ? SERVICES.FRONTEND : SERVICES.BACKEND;

	const displayTitle = { frontend: "front end", backend: "back end" }[type];

	return (
		<article>
			<h4 className="border-b pb-2.5">
				<b className="text-lg capitalize text-muted-foreground">{displayTitle}</b>{" "}
				services
			</h4>

			<Accordion
				type="single"
				collapsible
			>
				{services.map((value: Service, index: number) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="py-5"
					>
						<AccordionTrigger className="outline-none hover:no-underline">
							{value.title}
						</AccordionTrigger>
						<AccordionContent>{value.description}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</article>
	);
}
