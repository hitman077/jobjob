import BannerSection from "@/components/banner-section";
import JobSection from "@/components/job/job-section";
import JobSection2 from "@/components/job/job-section2";
import JobSection3 from "@/components/job/job-section3";
import Pricing from "@/components/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerSection />
			<JobSection />
			<JobSection2 />
			<JobSection3 />
		</>
  )
}
