"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
// import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Skeleton } from "./ui/skeleton"

const banner = [
	{
		id: 1,
		imgUrl: "https://placehold.co/990x334/646464/FFFFFF.png",
	},
	{
		id: 2,
		imgUrl: "https://placehold.co/990x334/646464/FFFFFF.png",
	},
	// {
	// 	id: 3,
	// 	imgUrl: "https://placehold.co/990x334/0933C8/FFFFFF.png",
	// },
	// {
	// 	id: 4,
	// 	imgUrl: "/images/news/n1.jpg",
	// },
]
export default function BannerSection() {
	return (
		// <div className="relative overflow-hidden">
		<section className="relative">
			<div className="relative pt-12 lg:py-0">
				{/* <div className="mx-auto max-w-7xl px-6 md:px-12"> */}
				<Swiper
					className="group"
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					// navigation={true}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
					loop
					autoplay={{ delay: 5000 }}
					effect="fade"
					modules={[Autoplay, EffectFade, Navigation, Pagination]}
				>
					{banner.map((item, index) => (
						<SwiperSlide>
							<img
								className="w-full size-full object-fill"
								src={item.imgUrl}
								key={item.id}
							/>
							{/* <Skeleton className="flex h-[455px] w-full text-8xl items-center justify-center rounded-none">
							900 x 455
						</Skeleton> */}
						</SwiperSlide>
					))}
					{banner.length > 1 && (
						<>
							<div className="swiper-button-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-center rounded-full bg-black/40 text-white cursor-pointer opacity-0 group-hover:opacity-100 duration-300 hover:bg-black/70">
								<ChevronLeft className="size-7" />
							</div>
							<div className="swiper-button-next absolute top-1/2 right-2 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-center rounded-full bg-black/40 text-white cursor-pointer opacity-0 group-hover:opacity-100 duration-300 hover:bg-black/70">
								<ChevronRight className="size-7" />
							</div>
						</>
					)}
				</Swiper>
				{/* </div> */}
			</div>
		</section>
		// </div>
	)
}
