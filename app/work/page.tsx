"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderButtons from "./SliderButtons";



const projects = [
	{
		num: "01",
		category: "backend",
		title: "Project 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam eum, suscipit dolore eos laboriosam deserunt blanditiis fugiat ullam? Eveniet qui provident dolores ea!",
		stack: [
			{ name: "DotNet" },
			{ name: "Entity Framework" },
			{ name: "SQL" },
		],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "backend",
		title: "Project 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam eum, suscipit dolore eos laboriosam deserunt blanditiis fugiat ullam? Eveniet qui provident dolores ea!",
		stack: [
			{ name: "NextJs" },
			{ name: "React" },
			{ name: "Html" },
		],
		image: "/assets/work/thumb2.png",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "backend",
		title: "Project 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam eum, suscipit dolore eos laboriosam deserunt blanditiis fugiat ullam? Eveniet qui provident dolores ea!",
		stack: [
			{ name: "DotNet" },
			{ name: "Entity Framework" },
			{ name: "SQL" },
		],
		image: "/assets/work/thumb3.png",
		live: "",
		github: "",
	},
]

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper: any) => {
		const currentProjectIndex = swiper.activeIndex;
		console.log(currentProjectIndex);
		setProject(projects[currentProjectIndex]);
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn"
				}
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[24px] h-[50%]">
							{/* ouline num */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>

							{/* Project category */}
							<h2 className="capitalize text-bold text-[42px] text-white group-hover:text-accent transition-all duration-500">
								{project.category} Project
							</h2>

							{/* Project description */}
							<p className="text-white/60">{project.description}</p>

							{/* Project Stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-accent text-xl">
											{item.name}
											{index !== project.stack.length - 1 && ","}
										</li>
									)
								})}
							</ul>

							{/* border */}
							<div className="border border-b-2 border-white/60"></div>

							{/* buttons */}
							<div className="flex gap-4 items-center">
								{/* live project button */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												Live Project
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* github repo button */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												Live Project
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							onChange={handleSlideChange}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((item, index) => {
								return <SwiperSlide key={index}>
									<div className="h-[460px] relative group flex justify-center items-center bg-white/20">
										{/* overlay */}
										<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
										{/* image */}
										<div className="relative w-full h-full">
											<Image src={item.image} fill alt="" className="object-cover w-full h-full" />
										</div>
									</div>
								</SwiperSlide>
							})}
							<SliderButtons />
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Work