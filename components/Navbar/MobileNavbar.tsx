"use client";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { links } from "./Navbar"
import { CiMenuFries } from "react-icons/ci"

const MobileNavbar = () => {
	const pathName = usePathname();

	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<Link href={"/"}>
					<div className="text-white text-2xl text-center mt-24 mb-24">
						Vimal <span className="text-accent">.</span>
					</div>
				</Link>

				{/* nav bar items */}
				<nav className="flex flex-col gap-8 items-center justify-center text-white">
					{links.map((link, index) => {
						return <Link href={link.path} key={index} className={`${pathName === link.path ? "text-accent border-b-2 border-accent" : ""} text-xl hover:text-accent`}>
							{link.name}
						</Link>
					})}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavbar
