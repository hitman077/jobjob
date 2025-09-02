"use client"
import React from "react"
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

export default function BannerSection() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="x-auto relative max-w-6xl">
					<Swiper
						className="mySwiper"
						slidesPerView={1}
						pagination={{ dynamicBullets: true }}
						loop
						autoplay={{ delay: 5000 }}
						navigation={false}
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
							<div className="bg-background rounded-(--radius) h-80 max-w-6xl border p-9">
								<div className="mx-auto h-fit w-full">
									{/* <AstroLogo /> */}
								</div>
								<p className="mt-6 text-center text-lg font-medium">
									45% Increase in revenue
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide className="">
							<div className="bg-background rounded-(--radius) h-80 max-w-6xl border p-9">
								<div className="mx-auto h-fit w-full">
									{/* <WorkOsLogo /> */}
								</div>
								<p className="mt-6 text-center text-lg font-medium">
									60% Increase in revenue
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
