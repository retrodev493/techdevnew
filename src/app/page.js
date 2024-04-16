import AboutUs from "@/widgets/AboutUs";
import AiPowered from "@/widgets/AiPowered";
import BusinessExcellence from "@/widgets/BusinessExcellence";
import CaseStudiess from "@/widgets/CaseStudies";
import Explore from "@/widgets/Explore";

import HomeBanner from "@/widgets/HomeBanner";
import Insight from "@/widgets/Insight";
import MiniBanner from "@/widgets/MiniBanner";
import SapMiniBanner from "@/widgets/SapMiniBanner";
import Testimonials from "@/widgets/Testimonials";

export default function Home() {
  
  return (
   
    <div>
    <HomeBanner/>
    <MiniBanner/>
    <BusinessExcellence/>
    <CaseStudiess/>
    <SapMiniBanner/>
    <AiPowered/>
    <Testimonials/>
    <Insight/>
    <AboutUs/>
   <Explore/>
    </div>
  );
}
