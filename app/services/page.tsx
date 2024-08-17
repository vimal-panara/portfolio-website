"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

type ServiceData = {
	num: string,
	title: string,
	description: string,
	href: string
}

const services: Array<ServiceData> = [
	{
		num: "01",
		title: "Web Development",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo laboriosam consectetur?",
		href: ""
	},
	{
		num: "02",
		title: "UI/UX Development",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo laboriosam consectetur?",
		href: ""
	},
	{
		num: "03",
		title: "API Development",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo laboriosam consectetur?",
		href: ""
	},
	{
		num: "04",
		title: "Performance Optimization",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo laboriosam consectetur?",
		href: ""
	},
]

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1,
						transition: {
							delay: 2,
							duration: 0.4,
							ease: "easeIn"
						}
					}}
					className="grid grid-cols-1 xl:grid-cols-2 gap-16"
				>
					{services.map((service, index) => {
						return (
							<div 
								key={index}
								className="flex-1 flex flex-col justify-center gap-4 group"
							>
								{/* top  */}
								<div className="flex justify-between items-center group">
									<div className="text-3xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
									<Link href={service.href} className="h-10 w-10 bg-white group-hover:bg-accent flex justify-center items-center rounded-full transition-all duration-500 hover:-rotate-45">
										<BsArrowDownRight className="text-xl" />
									</Link>
								</div>
								{/* title */}
								<h2 className="text-3xl group-hover:text-accent transition-all duration-500 leading-none text-white">{service.title}</h2>
								{/* description */}
								<p className="text-white/60">{service.description}</p>
								{/* border */}
								<div className="border-b border-white/20 w-full"></div>
							</div>)
					})}
				</motion.div>
			</div>
		</section>
	)
}

export default Services
