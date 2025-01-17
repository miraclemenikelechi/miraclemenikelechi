import "@styles/_nav_menu_button.scss";

import { AlignRight, X } from "lucide-react";
import React from "react";

export default function Component() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	function handleClick() {
		return setIsOpen((previous) => !previous);
	}

	return (
		<section className={`flex items-center justify-center`}>
			<button
				onClick={handleClick}
				className={`relative size-16 nav-menu-button--${
					isOpen ? "open" : "close"
				}`}
				id={`nav-menu-button`}
			>
				<span className={`flex items-center justify-center size-10`}>
					<i>{isOpen ? <X size={32} /> : <AlignRight size={32} />}</i>
				</span>
			</button>
		</section>
	);
}
