"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

const PageTransition = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const pathName = usePathname();

	return (
		<>
			<AnimatePresence>
				<div key={pathName}>
					{/* Div below is on the top of the page, we animate this div from opac to transparent */}
					<motion.div
						initial={{ opacity: 1 }}
						animate={{
							opacity: 0,
							transition: {
								delay: 1,
								duration: 0.4,
								ease: "easeInOut"
							}
						}}
						className="w-screen h-screen fixed pointer-events-none top-0 bg-primary"
					/>
					{children}
				</div>
			</AnimatePresence>
		</>
	)
}

export default PageTransition
