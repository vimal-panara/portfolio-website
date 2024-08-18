"use client";

import { motion } from "framer-motion"

const totalSteps = 6

const calculateDelay = (index: number) => {
	return totalSteps - index - 1
}

const TransitionEffect = () => {
	return (
		<>
			{[...Array(totalSteps)].map((_, index) => {
				return <motion.div
					key={index}
					initial={{top: "0%"}}
					animate={{top: "100%"}}
					exit={{top: ["100%", "0%"]}}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
						delay: calculateDelay(index) * 0.1
					}}
					className="h-full w-full bg-white relative"
				/>
			})}
		</>
	)
}

export default TransitionEffect
