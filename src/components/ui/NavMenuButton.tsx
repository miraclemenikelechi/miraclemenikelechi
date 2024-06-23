// import { AlignRight } from "lucide-react";
import React from "react";
import "@styles/_nav-menu-button.scss";

("use client");

export default function NavMenuButton() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	function handleClick() {
		return setIsOpen((previous) => !previous);
	}

	return (
		<section className="flex items-center justify-center border size-64">
			<button
				onClick={handleClick}
				// className="bg-red-500"
				id="nav-menu-button"
			>
				<span
					className="flex items-center justify-center size-10"
					id=""
				>
					{/* <AlignRight /> */}
					{isOpen ? "open" : "close"}
				</span>
			</button>
		</section>
	);
}
