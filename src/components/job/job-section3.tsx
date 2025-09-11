import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Home, LayoutGrid, Lightbulb, Settings, User } from "lucide-react"
import {
	Card,
	CardContent,
} from "@/components/ui/card"
import Image from "next/image"

const tabs = [
	{
		name: "Home",
		value: "home",
		icon: Home,
	},
	{
		name: "Profile",
		value: "profile",
		icon: User,
	},
	{
		name: "Messages",
		value: "messages",
		icon: Bot,
	},
	{
		name: "Settings",
		value: "settings",
		icon: Settings,
	},
	{
		name: "บทความทั้งหมด",
		value: "all",
		icon: LayoutGrid,
	},
	{
		name: "Tips & Tricks",
		value: "tipsandtricks",
		icon: Lightbulb,
	},
]
export default function JobSection3() {
	return (
		<section className="py-12 md:py-20">
			<div className="mx-auto max-w-7xl space-y-4">
				<div className="relative z-10 mx-auto max-w-7xl">
					<h1 className="text-xl uppercase font-semibold lg:text-2xl">
						Section3
					</h1>
				</div>
				<div className="grid gap-3 grid-cols-1">
					<Tabs
						defaultValue={tabs[0].value}
						className="flex flex-col justify-stretch lg:flex-row gap-4 w-full"
					>
						<div className="lg:w-[175px] lg:shrink-0">
							<TabsList className="flex flex-col w-full h-auto items-start bg-background">
								{tabs.map((tab) => (
									<TabsTrigger
										key={tab.value}
										value={tab.value}
										className="w-full text-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground justify-start p-2.5"
									>
										<tab.icon className="size-5" />
										{tab.name}
									</TabsTrigger>
								))}
							</TabsList>
						</div>
						{tabs.map((tab) => (
							<TabsContent
								key={tab.value}
								value={tab.value}
							>
								<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
									<div className="col-span-2 translate-y-0">
										<Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-primary hover:-translate-y-1 hover:shadow-lg/50 pt-0 pb-2 gap-0">
											<div className="inset-0 transition-transform duration-500 group-hover:scale-105">
												<Image
													src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2024/12/HP.png"
													alt=""
													width={0}
													height={0}
													sizes="100vw"
													className="w-full h-60 object-cover rounded-t-md"
												/>
											</div>
											<CardContent className="p-2">
												<span className="text-sm text-muted-foreground">
													9 ธันวาคม 2567
												</span>
												<h1 className="font-medium text-md">
													6 ที่สุดของหูฟังไร้สายแห่งปี
													เสียงดีไม่มีกั๊ก
													จะอุปกรณ์ไหนก็ใช้ได้
												</h1>
												<p
													className="text-sm text-muted-foreground"
												>
													ถ้ากำลังมองหาหูฟังซักรุ่น
													เป็นรางวัลให้กับตัวเองสำหรับปี
													2025 Mercular.com คัดหูฟัง 6
													ตัวเด็ดแห่งปี เสียงดีทุกย่าน
													ใช้ได้กับทุกระบบปฏิบัติการ
													มาให้ดูกันที่นี่
												</p>
											</CardContent>
										</Card>
									</div>
									<div className="col-span-3">
										<div className="grid grid-cols-3 gap-4">
											{[1, 2, 3, 4, 5, 6].map(
												(item, index) => (
													<div
														className="translate-y-0"
														key={index}
													>
														<Card className="group overflow-hidden transition-all duration-300 hover:shadow-primary hover:-translate-y-1 hover:shadow-lg/50 pt-0 pb-2 gap-0">
															<div className="inset-0 transition-transform duration-500 group-hover:scale-105">
																<Image
																	src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2024/12/HP.png"
																	alt=""
																	width={0}
																	height={0}
																	sizes="100vw"
																	className="w-full object-cover rounded-md"
																/>
															</div>
															<CardContent className="p-2">
																<span className="text-sm text-muted-foreground">
																	9 ธันวาคม
																	2567
																</span>
																<p className="MuiTypography-root MuiTypography-3.0/subtitle2 css-1hpvkau">
																	6
																	ที่สุดของหูฟังไร้สายแห่งปี
																	เสียงดีไม่มีกั๊ก
																	จะอุปกรณ์...
																</p>
															</CardContent>
														</Card>
													</div>
												)
											)}
										</div>
									</div>
								</div>
								{/* <div className="grid grid-cols-4 gap-4">
									{[1, 2, 3, 4, 5, 6].map((item, index) => (
										<div
											className="translate-y-0"
											key={index}
										>
											<Card className="group overflow-hidden transition-all duration-300 hover:shadow-primary hover:-translate-y-1 hover:shadow-lg/50 pt-0 pb-2 gap-0">
												<div className="inset-0 transition-transform duration-500 group-hover:scale-105">
													<Image
														src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2024/12/HP.png"
														alt=""
														width={0}
														height={0}
														sizes="100vw"
														className="w-full object-cover rounded-t-md"
													/>
												</div>
												<CardContent className="p-2">
													<span className="text-sm text-muted-foreground">
														9 ธันวาคม 2567
													</span>
													<p className="MuiTypography-root MuiTypography-3.0/subtitle2 css-1hpvkau">
														6
														ที่สุดของหูฟังไร้สายแห่งปี
														เสียงดีไม่มีกั๊ก
														จะอุปกรณ์ไหนก็ใช้ได้
													</p>
												</CardContent>
											</Card>
										</div>
									))}
								</div> */}
							</TabsContent>
						))}
					</Tabs>
				</div>
			</div>
		</section>
	)
}
