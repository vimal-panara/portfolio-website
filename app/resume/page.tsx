"use client";

import { FaHtml5 } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about section
const aboutData = {
	title: "About me",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, veniam.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Vimal Panara"
		},
		{
			fieldName: "Phone",
			fieldValue: "(+91) 7984008857"
		},
		{
			fieldName: "Email",
			fieldValue: "vimalpanara1998@gmail.com"
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years"
		},
		{
			fieldName: "Nationality",
			fieldValue: "Indian"
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Hindi, Gujarati"
		},
	]
}

// experience section
const experienceData = {
	title: "My Experience",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste recusandae vel adipisci temporibus.",
	items: [
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		},
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		},
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		},
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		},
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		},
		{
			company: "Livlong 365 (Formarly IIFL Insurance)",
			position: "Software Engineer",
			duration: "Aug 2022 - Present"
		}
	]
}

// education section
const educationData = {
	title: "My Education",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, mollitia!",
	items: [
		{
			institute: "Indian Institute of Technology Gandhinagar (IIT Gandhinagar)",
			degree: "M.Tech",
			duration: "Aug 2020 - July 2022"
		},
		{
			institute: "Institue of Infrastructure Technology Research And Mangement (IITRAM) Ahmedabad",
			degree: "B.Tech",
			duration: "Aug 2016 - July 2020"
		},
		{
			institute: "Jawahar Navodaya Vidhyalaya Aliabada (JNV Jamnagar)",
			degree: "HSC",
			duration: "May 2015 - May 2016"
		},
	]
}

// skilss section
const skillsData = {
	title: "My Skils",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti perferendis pariatur.",
	items: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
	]
}

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: "easeIn"
				}
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col gap-16 xl:flex-row"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						{/* tabs content */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col text-center xl:text-left gap-[30px]">
								<h3 className="text-4xl font-bold">{experienceData.title}</h3>
								<p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{experienceData.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experienceData.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 lg:pl-6">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-2">
														<span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="education" className="w-full">
							<div className="flex flex-col text-center xl:text-left gap-[30px]">
								<h3 className="text-4xl font-bold">{educationData.title}</h3>
								<p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{educationData.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{educationData.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 lg:pl-6">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] text-center lg:text-left">{item.degree}</h3>
													<div className="flex items-center gap-2">
														<span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institute}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col text-center xl:text-left gap-[30px]">
								<h3 className="text-4xl font-bold">{skillsData.title}</h3>
								<p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{skillsData.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-[30px]">
										{skillsData.items.map((item, index) => {
											return (
												<li key={index} className="">
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-full p-10 bg-[#232329] rounded-xl flex justify-center items-center group">
																<div className="text-6xl group-hover:text-accent transition-all duration-300">
																	{item.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">
																	{item.name}
																</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col text-center xl:text-left gap-[30px]">
								<h3 className="text-4xl font-bold">{aboutData.title}</h3>
								<p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{aboutData.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] xl:max-w-none mx-auto xl:mx-0">
										{aboutData.info.map((item, index) => {
											return (
												<li key={index} className="flex justify-center items-center xl:justify-start gap-4">
													<span className="text-white/60 text-sm">{item.fieldName}</span>
													<span className="text-md">{item.fieldValue}</span>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
					</div>

				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
