import { AlignRight, X } from "lucide-react";
import React from "react";
import "@styles/_nav-menu-button.scss";

("use client");

export default function NavMenuButton() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	function handleClick() {
		return setIsOpen((previous) => !previous);
	}

	return (
		<section className="flex items-center justify-center border">
			<button
				onClick={handleClick}
				className={`relative size-16 nav-menu-button--${
					isOpen ? "open" : "close"
				}`}
				id={`nav-menu-button`}
			>
				<span className="flex items-center justify-center size-10">
					<i className="text-white">
						{isOpen ? <X size={32} /> : <AlignRight size={32} />}
					</i>
				</span>
			</button>
		</section>
	);
}
