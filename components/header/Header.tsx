import Link from "next/link"
import { Button } from "../ui/button"
import Navbar from "../navbar/Navbar"

const Header = () => {
	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Vimal <span className="text-accent">.</span>
					</h1>
				</Link>

				{/* Desktop Nav & hire me button */}
				<div className="hidden xl:flex items-center gap-8">
					<Navbar />
					<Link href={"/contact"}>
						<Button>Hire Me</Button>
					</Link>
				</div>

				{/* Mobile Nav */}
				<div className="xl:hidden">
					Mobile Nav
				</div>

			</div>
		</header>
	)
}

export default Header
