"use client"
import { Check } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "../ui/card"
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"

// Modules ที่จำเป็นสำหรับ Swiper
import { Autoplay, Pagination } from "swiper/modules"

// Import styles
import "swiper/css"
// ปิดการใช้ position: absolute ใน swiper/css/pagination;
import "swiper/css/pagination"
import { Skeleton } from "../ui/skeleton"

interface Company {
	id: number
	name: string
	industry: string
	head_office: string
	employees: number
	founded: number
}

const companies: Company[] = [
	{
		id: 1,
		name: "ปตท. จำกัด (มหาชน)",
		industry: "พลังงานและปิโตรเคมี",
		head_office: "กรุงเทพมหานคร",
		employees: 25000,
		founded: 1978,
	},
	{
		id: 2,
		name: "ไทยเบฟเวอเรจ จำกัด (มหาชน)",
		industry: "เครื่องดื่มและอาหาร",
		head_office: "กรุงเทพมหานคร",
		employees: 30000,
		founded: 2003,
	},
	{
		id: 3,
		name: "ซีพี ออลล์ จำกัด (มหาชน)",
		industry: "ค้าปลีกและบริการ",
		head_office: "กรุงเทพมหานคร",
		employees: 45000,
		founded: 1988,
	},
	{
		id: 4,
		name: "แอดวานซ์ อินโฟร์ เซอร์วิส (AIS)",
		industry: "โทรคมนาคม",
		head_office: "กรุงเทพมหานคร",
		employees: 12000,
		founded: 1986,
	},
	{
		id: 5,
		name: "ธนาคารไทยพาณิชย์ (SCB)",
		industry: "การเงินและธนาคาร",
		head_office: "กรุงเทพมหานคร",
		employees: 27000,
		founded: 1906,
	},
	{
		id: 6,
		name: "ธนาคารกสิกรไทย (KBANK)",
		industry: "การเงินและธนาคาร",
		head_office: "กรุงเทพมหานคร",
		employees: 29000,
		founded: 1945,
	},
	{
		id: 7,
		name: "ไทยออยล์ จำกัด (มหาชน)",
		industry: "พลังงานและโรงกลั่น",
		head_office: "ชลบุรี",
		employees: 6000,
		founded: 1961,
	},
	{
		id: 8,
		name: "เซ็นทรัล รีเทล คอร์ปอเรชั่น",
		industry: "ค้าปลีก",
		head_office: "กรุงเทพมหานคร",
		employees: 35000,
		founded: 2019,
	},
	{
		id: 9,
		name: "การบินไทย จำกัด (มหาชน)",
		industry: "สายการบิน",
		head_office: "กรุงเทพมหานคร",
		employees: 20000,
		founded: 1960,
	},
	{
		id: 10,
		name: "เครือเจริญโภคภัณฑ์ (CP Group)",
		industry: "เกษตรและอาหาร",
		head_office: "กรุงเทพมหานคร",
		employees: 300000,
		founded: 1921,
	},
]

export default function JobSection() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-7xl space-y-6">
					<h1 className="text-xl uppercase font-semibold lg:text-2xl">
						Section1
					</h1>
				</div>
				<div className="mt-4">
					<Swiper
						modules={[Autoplay, Pagination]}
						spaceBetween={13}
						slidesPerView={6}
						slidesPerGroup={6} // เลื่อนทีละ 6 การ์ด
						pagination={{ clickable: true }}
						// loop
						// autoplay={{ delay: 5000 }}
						breakpoints={{
							500: {
								slidesPerView: 3,
							},
							640: {
								slidesPerView: 4,
							},
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
							1280: {
								slidesPerView: 6,
							},
						}}
						className="my-swiper"
					>
						{companies.map((companie, index) => (
							<SwiperSlide className="pt-2">
								<div className="transition-all duration-300 opacity-100 translate-y-0">
									<Card
										className="flex flex-col h-[380px] transition-transform duration-300 hover:border-primary hover:-translate-y-1 hover:text-primary"
										key={index}
									>
										<CardHeader className="p-0">
											{/* <CardTitle className="font-medium">
											{companie.name}
										</CardTitle> */}
											<Skeleton className="flex h-[250px] w-full text-8xl items-center justify-center rounded-none" />
										</CardHeader>

										<CardContent className="space-y-4 px-3">
											<h1 className="font-light text-sm md:text-md">
												{companie.name.slice(0, 24)}...
											</h1>
										</CardContent>
									</Card>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				{/* <Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					pagination={{ clickable: true }}
					breakpoints={{
						500: {
							slidesPerView: 3,
						},
						640: {
							slidesPerView: 4,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 5,
						},
						1280: {
							slidesPerView: 5,
						},
					}}
					className="my-swiper"
				>
					{[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
						<SwiperSlide className="gap-0">
							<Card className="flex flex-col" key={index}>
								<CardHeader>
									<CardTitle className="font-medium">
										Free
									</CardTitle>
									<span className="my-3 block text-2xl font-semibold">
										$0 / mo
									</span>
									<CardDescription className="text-sm">
										Per editor
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-4">
									<hr className="border-dashed" />

									<ul className="list-outside space-y-3 text-sm">
										{[
											"Basic Analytics Dashboard",
											"5GB Cloud Storage",
											"Email and Chat Support",
										].map((item, index) => (
											<li
												key={index}
												className="flex items-center gap-2"
											>
												<Check className="size-3" />
												{item}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper> */}
			</div>
		</section>
	)
}
