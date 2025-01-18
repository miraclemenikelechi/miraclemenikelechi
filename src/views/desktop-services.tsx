import React from "react";
import Services from "@/components/service";

export default function Component() {
	return (
		<React.Fragment>
			<Services type="frontend" />
			<Services type="backend" />
		</React.Fragment>
	);
}
