import React from "react"
import {
	Card,
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

type Props = {}

export default function JobSection2({}: Props) {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-6xl space-y-6">
					<h1 className="text-xl font-semibold lg:text-2xl">
						HOT JOBS
					</h1>
				</div>

				<div className="mt-4 grid gap-4 md:mt-4 md:grid-cols-5">
					{[1, 2, 3, 4, 5,6,7,8,9,10].map((item, index) => (
						<Card className="flex flex-col py-0 gap-1" key={index}>
							<CardHeader className="p-0">
								<Image
									src="https://i.imgur.com/62gGzeF.jpeg"
									alt=""
									width={300}
									height={150}
									className="w-full h-[150px] object-cover rounded-t-lg"
								/>
							</CardHeader>
							<CardContent className="p-2">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
