"use client";

import { Button } from "@/components/ui/button";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
	const swiper = useSwiper();

	return (
		<div className="flex gap-2 absolute righ-0	 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-normal">
			<button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300" onClick={() => swiper.slidePrev()}>
				<PiCaretLeftBold />
			</button>
			<button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-300" onClick={() => swiper.slideNext()}>
				<PiCaretRightBold />
			</button>
		</div>
	)
}

export default SliderButtons
