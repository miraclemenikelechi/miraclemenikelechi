import { SERVICES } from "../assets/data/service";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Component() {
	return (
		<>
			<RenderServices type="frontend" />
			<RenderServices type="backend" />
		</>
	);
}

interface Service {
	title: string;
	description: string;
}

interface RenderServicesProps {
	type: "frontend" | "backend";
}

function RenderServices({ type }: RenderServicesProps) {
	const services = type === "frontend" ? SERVICES.FRONTEND : SERVICES.BACKEND;

	return (
		<article>
			<h4 className="border-b pb-2.5">
				<b className="text-lg capitalize text-muted-foreground">{type}</b>{" "}
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
