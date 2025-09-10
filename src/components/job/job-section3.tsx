import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Home, LayoutGrid, Lightbulb, Settings, User } from "lucide-react"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
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
		<section className="py-10">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-7xl space-y-6">
					<h1 className="text-xl uppercase font-semibold lg:text-2xl">
						Section3
					</h1>
				</div>

				<div className="mt-4 grid grid-cols-1 gap-4">
					<div className="flex items-start">
						<Tabs
							defaultValue={tabs[0].value}
							orientation="vertical"
							className="flex flex-col justify-stretch lg:flex-row gap-4 text-sm text-muted-foreground w-full"
						>
							<div className="lg:w-[175px] lg:shrink-0">
								<TabsList className="flex flex-col w-full h-auto items-start bg-background">
									{tabs.map((tab) => (
										<TabsTrigger
											key={tab.value}
											value={tab.value}
											className="w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground justify-start p-2.5"
										>
											<tab.icon className="h-5 w-5 me-2" />
											{tab.name}
										</TabsTrigger>
									))}
								</TabsList>
							</div>
							{tabs.map((tab) => (
								<TabsContent
									key={tab.value}
									value={tab.value}
									// className="grid grid-cols-2"
								>
									<div className="flex flex-row flex-nowrap gap-2">
										<Card className="w-full pt-0 pb-2 gap-2">
											<div>
												<Image
													src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2024/05/new-ipad-pro-2024-2.jpg"
													alt=""
													width={960}
													height={500}
													className="w-full h-[260px] object-cover rounded-t-md"
												/>
											</div>
											<CardContent className="space-y-2">
												<span className="text-xs text-muted-foreground">
													8 กันยายน 2568
												</span>
												<h1 className="font-medium text-md">
													สรุปสเปก iPad
													ใหม่ที่เปิดตัวในงาน Apple
													Let Loose
												</h1>
												<p className="text-md text-muted-foreground">
													เหล่าสาวก iPad
													เตรียมตัวกรี๊ดกับ iPad
													โฉมใหม่ในรอบ 2 ปี จากงาน
													Apple Event "Let Loose"
													ที่ผ่านมา จะมีอะไรไอเทมเด็ด
													ๆ อะไรเปิดเผยออกมาบ้าง...
												</p>
											</CardContent>
										</Card>
										<div className="flex flex-row flex-wrap gap-4">
											{[1, 2, 3, 4, 5, 6].map(
												(item, index) => (
													<Card
														className="w-full max-w-sm pt-0 pb-2 gap-1"
														key={index}
													>
														<div>
															<Image
																src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2024/05/new-ipad-pro-2024-2.jpg"
																alt=""
																width={960}
																height={500}
																className="w-full h-[100px] object-cover rounded-t-md"
															/>
														</div>
														<CardContent className="space-y-2 p-1">
															<span className="text-xs text-muted-foreground">
																8 กันยายน 2568
															</span>
															<h1 className="font-medium text-md">
																เปิดตัว
																Playstation
																Pulse Elite จาก
																Sony
																หูฟังเกมมิ่งสำหรับ
																PS5
															</h1>
														</CardContent>
													</Card>
												)
											)}
										</div>
									</div>
								</TabsContent>
							))}
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	)
}
