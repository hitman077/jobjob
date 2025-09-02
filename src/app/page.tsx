import BannerSection from "@/components/banner-section";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import JobSection from "@/components/job/job-section";
import JobSection2 from "@/components/job/job-section2";
import JobSection3 from "@/components/job/job-section3";
import JobSection4 from "@/components/job/job-section4";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <BannerSection />
			<JobSection />
			<JobSection2 />
      <JobSection3 />
      <JobSection4 />
      <FooterSection/>
		</>
  )
}
