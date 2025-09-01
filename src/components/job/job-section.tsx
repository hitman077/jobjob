import { Check } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'



export default function JobSection() {
  return (
		<section className="py-10">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-6xl space-y-6">
					<h1 className="text-xl font-semibold lg:text-2xl">
						TOP COMPANIES
					</h1>
				</div>

              <div className="mt-4 grid gap-3 md:mt-4 md:grid-cols-5">
                  {[1,2,3,4,5].map((item, index) => (
					<Card className="flex flex-col" key={index}>
						<CardHeader>
							<CardTitle className="font-medium">Free</CardTitle>
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

						<CardFooter className="mt-auto">
							<Button
								asChild
								variant="outline"
								className="w-full"
							>
								<Link href="">Get Started</Link>
							</Button>
						</CardFooter>
                      </Card>
                      ))}
				</div>
			</div>
		</section>
  )
}