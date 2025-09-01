import BannerSection from "@/components/banner-section";
import FooterSection from "@/components/footer";
import JobSection from "@/components/job/job-section";
import JobSection2 from "@/components/job/job-section2";
import JobSection3 from "@/components/job/job-section3";

export default function Home() {
  return (
    <>
      <BannerSection />
			<JobSection />
			<JobSection2 />
      <JobSection3 />
      <FooterSection/>
		</>
  )
}
