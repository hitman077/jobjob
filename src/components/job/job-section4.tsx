import React from "react"
import {
	Card,
} from "../ui/card"
import { Skeleton } from "../ui/skeleton"

type Props = {}

export default function JobSection4({}: Props) {
	return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-6xl space-y-6">
					<h1 className="text-xl font-semibold lg:text-2xl">
						URGENT JOBS
					</h1>
				</div>

				<div className="mt-4 grid gap-4 md:mt-4 md:grid-cols-2">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<Card className="flex flex-row gap-4 p-2" key={item}>
							<div className="flex-1 space-y-2">
								<h1 className="font-medium text-md">
									<Skeleton className="h-4 w-[350px]" />
								</h1>
								<Skeleton className="h-3 w-[250px]" />
								<Skeleton className="h-3 w-[250px]" />
								<Skeleton className="h-3 w-[250px]" />
							</div>
							<div className="flex">
								<Skeleton className="h-[94px] w-[94px] rounded-xl" />
								{/* <Image
								src="https://i.imgur.com/62gGzeF.jpeg"
								alt=""
								width={94}
								height={94}
								className="w-[94px] h-[94px] object-cover rounded"
							/> */}
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
