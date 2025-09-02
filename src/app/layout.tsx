import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"
import HeaderSection from "@/components/header-section"
import { ThemeProvider } from "@/components/theme-provider"

const prompt = Prompt({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
	title: "JobJob - Find Your Dream Job",
	description:
		"ค้นพบงานที่เหมาะกับคุณด้วย JobJob แพลตฟอร์มการค้นหางานที่ดีที่สุดที่เชื่อมโยงผู้มีความสามารถกับโอกาสต่างๆ",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={prompt.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<HeaderSection />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
