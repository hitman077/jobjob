import React from "react"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import { Check } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { formatThaiDate } from "@/lib/thaiDate"

interface Blog {
	id: number
	title: string
	slug: string
	excerpt: string
	content: string
	author: string
	publishedAt: string
	tags: string[]
	coverImage: string
}

const blogs: Blog[] = [
	{
		id: 1,
		title: "AI เปลี่ยนโลก: แนวโน้มและโอกาสในปี 2025",
		slug: "ai-trends-2025",
		excerpt:
			"ปัญญาประดิษฐ์ (AI) จะเข้ามามีบทบาทสำคัญในธุรกิจและชีวิตประจำวัน...",
		content:
			"ในปี 2025 AI ไม่เพียงแต่ถูกใช้ในระบบอัตโนมัติ แต่ยังพัฒนาไปสู่การช่วยตัดสินใจ...",
		author: "สมชาย เทคโน",
		publishedAt: "2025-08-01T09:00:00Z",
		tags: ["AI", "Machine Learning", "Trends"],
		coverImage: "https://picsum.photos/seed/ai/800/400",
	},
	{
		id: 2,
		title: "Blockchain กับการเงินดิจิทัล",
		slug: "blockchain-digital-finance",
		excerpt: "Blockchain กำลังเปลี่ยนวิธีการทำธุรกรรมทางการเงิน...",
		content:
			"เทคโนโลยี Blockchain ทำให้ธุรกรรมปลอดภัย โปร่งใส และไร้ตัวกลาง...",
		author: "อนันต์ ดิจิทัล",
		publishedAt: "2025-08-03T10:00:00Z",
		tags: ["Blockchain", "Finance", "Crypto"],
		coverImage: "https://picsum.photos/seed/blockchain/800/400",
	},
	{
		id: 3,
		title: "อนาคตของ 5G และ 6G",
		slug: "future-5g-6g",
		excerpt: "เครือข่าย 5G เริ่มแพร่หลาย และ 6G ก็กำลังมา...",
		content:
			"ด้วยความเร็วและ latency ที่ต่ำ 5G/6G จะเปลี่ยนประสบการณ์การใช้งาน IoT และ Metaverse...",
		author: "วิทยา ไอที",
		publishedAt: "2025-08-05T11:30:00Z",
		tags: ["5G", "6G", "Telecom"],
		coverImage: "https://picsum.photos/seed/5g/800/400",
	},
	{
		id: 4,
		title: "Cybersecurity: ป้องกันข้อมูลในยุคดิจิทัล",
		slug: "cybersecurity-protection",
		excerpt:
			"ภัยคุกคามไซเบอร์เพิ่มขึ้นทุกปี การรักษาความปลอดภัยจึงสำคัญยิ่ง...",
		content:
			"องค์กรจำเป็นต้องลงทุนในระบบ Cybersecurity เช่น Zero Trust และ AI Security...",
		author: "เกษม อินเทอร์เน็ต",
		publishedAt: "2025-08-07T08:15:00Z",
		tags: ["Cybersecurity", "Data", "Privacy"],
		coverImage: "https://picsum.photos/seed/cyber/800/400",
	},
	{
		id: 5,
		title: "Metaverse: โลกเสมือนที่กำลังขยายตัว",
		slug: "metaverse-expansion",
		excerpt: "Metaverse กำลังเปิดโอกาสใหม่ๆ ให้ธุรกิจและผู้ใช้งาน...",
		content:
			"จากเกม สู่การทำงาน และการศึกษา Metaverse จะเป็น ecosystem ใหม่ของมนุษย์...",
		author: "นฤมล สมจริง",
		publishedAt: "2025-08-09T13:00:00Z",
		tags: ["Metaverse", "VR", "AR"],
		coverImage: "https://picsum.photos/seed/metaverse/800/400",
	},
	{
		id: 6,
		title: "Quantum Computing: คำนวณที่เหนือกว่าซุปเปอร์คอมพิวเตอร์",
		slug: "quantum-computing",
		excerpt: "Quantum Computing กำลังจะเปลี่ยนวิธีแก้ปัญหาที่ซับซ้อน...",
		content:
			"ด้วยการประมวลผลแบบ quantum ทำให้เราสามารถแก้สมการที่ซับซ้อนในเวลาอันสั้น...",
		author: "พิชิต ควอนตัม",
		publishedAt: "2025-08-11T15:20:00Z",
		tags: ["Quantum", "Computing", "Future"],
		coverImage: "https://picsum.photos/seed/quantum/800/400",
	},
	{
		id: 7,
		title: "Edge Computing: การประมวลผลใกล้ผู้ใช้",
		slug: "edge-computing",
		excerpt: "Edge Computing ลด latency และช่วย IoT ทำงานได้ดีขึ้น...",
		content:
			"ด้วยการประมวลผลที่ใกล้กับแหล่งข้อมูล Edge Computing ช่วยให้ระบบตอบสนองเร็ว...",
		author: "สิทธิชัย คลาวด์",
		publishedAt: "2025-08-13T09:45:00Z",
		tags: ["Edge Computing", "IoT", "Cloud"],
		coverImage: "https://picsum.photos/seed/edge/800/400",
	},
	{
		id: 8,
		title: "Cloud Native: การพัฒนาแอปสมัยใหม่",
		slug: "cloud-native-apps",
		excerpt: "Cloud Native กำลังกลายเป็นมาตรฐานใหม่ในการพัฒนา software...",
		content:
			"Kubernetes, Docker และ microservices ทำให้ระบบมีความยืดหยุ่นสูง...",
		author: "อริสา คลาวด์",
		publishedAt: "2025-08-15T14:30:00Z",
		tags: ["Cloud", "DevOps", "Kubernetes"],
		coverImage: "https://picsum.photos/seed/cloud/800/400",
	},
	{
		id: 9,
		title: "Green Tech: เทคโนโลยีเพื่อสิ่งแวดล้อม",
		slug: "green-technology",
		excerpt: "พลังงานสะอาดและเทคโนโลยีที่ช่วยลดคาร์บอนเป็นหัวใจของอนาคต...",
		content:
			"จาก Solar Tech จนถึง Data Center ที่ประหยัดพลังงาน Green Tech กำลังมาแรง...",
		author: "ภาวิน สิ่งแวดล้อม",
		publishedAt: "2025-08-17T12:00:00Z",
		tags: ["Green Tech", "Sustainability", "Energy"],
		coverImage: "https://picsum.photos/seed/green/800/400",
	},
	{
		id: 10,
		title: "Robotics: หุ่นยนต์ผู้ช่วยในชีวิตประจำวัน",
		slug: "robotics-daily-life",
		excerpt: "หุ่นยนต์กำลังถูกนำมาใช้ในบ้านและอุตสาหกรรม...",
		content:
			"จากหุ่นยนต์ดูดฝุ่น จนถึงหุ่นยนต์ในสายการผลิต เทคโนโลยีหุ่นยนต์กำลังเข้าถึงทุกคน...",
		author: "ชลธิชา โรบอท",
		publishedAt: "2025-08-19T16:10:00Z",
		tags: ["Robotics", "Automation", "AI"],
		coverImage: "https://picsum.photos/seed/robot/800/400",
	},
]

export default function JobSection2() {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-6xl space-y-6">
					<h1 className="text-xl uppercase font-semibold lg:text-2xl">
						Section2
					</h1>
				</div>

				<div className="mt-4 grid gap-4 md:mt-4 md:grid-cols-3">
					{blogs.map((blog, index) => (
						<Card
							key={index}
							className="group overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-md py-0 gap-2"
						>
							<Link href={`/blog/${blog.id}`}>
								<div className="inset-0 transition-transform duration-500 group-hover:scale-105">
									<Image
										src={blog.coverImage}
										alt=""
										width={300}
										height={220}
										className="w-full h-[200px] object-cover rounded-t-lg"
									/>
								</div>
							</Link>
							<CardContent className="flex flex-col flex-grow px-4 py-0">
								<div className="flex gap-2 py-2">
									{blog.tags.map((tag, index) => (
										<Badge
											className="border-primary bg-primary-foreground"
											variant="outline"
											key={index}
										>
											{tag}
										</Badge>
									))}
								</div>
								<div className="flex py-2">
									<Link href={`/blog/${blog.id}`}>
										<h1 className="font-medium text-xl group-hover:text-primary">
											{blog.title}
										</h1>
									</Link>
								</div>
								<div className="flex w-full">
									<p className="text-muted-foreground text-sm">
										{blog.content.slice(0, 100)}...
									</p>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between w-full px-4 py-4">
								<div className="flex items-center gap-2">
									<Avatar className="rounded-full">
										<AvatarImage
											src="https://github.com/shadcn.png"
											alt={blog.author}
										/>
										<AvatarFallback className="bg-primary text-primary-foreground">
											{blog.author
												.slice(0, 1)
												.toUpperCase()}
										</AvatarFallback>
									</Avatar>

									<h4 className="text-muted-foreground text-sm">
										{blog.author}
									</h4>
								</div>
								<div className="flex items-center">
									<div className="flex">
										<p className="text-muted-foreground text-sm">
											{formatThaiDate(blog.publishedAt)}
										</p>
									</div>
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
