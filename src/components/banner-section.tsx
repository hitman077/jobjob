"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BannerSection() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="x-auto relative max-w-6xl">
					<Swiper
						className="swiper relative rounded-lg overflow-hidden shadow-lg group"
						spaceBetween={0}
						slidesPerView={1}
						pagination={{ dynamicBullets: true }}
						// navigation={true}
						navigation={{
							prevEl: ".swiper-button-prev",
							nextEl: ".swiper-button-next",
						}}
						loop
						autoplay={{ delay: 5000 }}
						// effect="coverflow"
						modules={[
							Autoplay,
							EffectCoverflow,
							Navigation,
							Pagination,
						]}
					>
						<SwiperSlide className="">
							<div className="bg-amber-500 rounded-(--radius) h-80 max-w-6xl border p-9">
								<div className="mx-auto h-fit w-full">
									{/* <NetlifyLogo /> */}
								</div>
								<p className="mt-6 text-center text-lg font-medium">
									30% Increase in revenue
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="bg-pink-500 rounded-(--radius) h-80 max-w-6xl border p-9">
								<div className="mx-auto h-fit w-full">
									{/* <AstroLogo /> */}
								</div>
								<p className="mt-6 text-center text-lg font-medium">
									45% Increase in revenue
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="bg-emerald-500 rounded-(--radius) h-80 max-w-6xl border p-9">
								<div className="mx-auto h-fit w-full">
									{/* <WorkOsLogo /> */}
								</div>
								<p className="mt-6 text-center text-lg font-medium">
									60% Increase in revenue
								</p>
							</div>
						</SwiperSlide>
						<div className="swiper-button-prev absolute top-1/2 -left-2 z-10 -translate-y-1/2 w-10 h-15 flex items-center justify-center rounded-r-md bg-black/40 text-white cursor-pointer opacity-0 group-hover:opacity-100 duration-300 hover:bg-black/70">
							<ChevronLeft className="size-7" />
						</div>
						<div className="swiper-button-next absolute top-1/2 -right-2 z-10 -translate-y-1/2 w-10 h-15 flex items-center justify-center rounded-l-md bg-black/40 text-white cursor-pointer opacity-0 group-hover:opacity-100 duration-300 hover:bg-black/70">
							<ChevronRight className="size-7" />
						</div>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
