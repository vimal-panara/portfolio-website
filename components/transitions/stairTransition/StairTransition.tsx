"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import TransitionEffect from "./TransitionEffect";

const StairTransition = () => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div key={pathName}>
				<div className="h-screen w-screen fixed top-0 left-0 right-0 flex pointer-events-none z-40">
					<TransitionEffect />
				</div>
			</div>
		</AnimatePresence>
	)
}

export default StairTransition
