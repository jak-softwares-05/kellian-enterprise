import { AboutUs, BookAServiceModal, GetStarted, HeroSection, Services, Statistics, Testimonials, VipTreatment } from "@/components";
import Faqs from '../components/home/Faqs';


const Home = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <BookAServiceModal />
      <main className="px-5 lg:px-2 xl:px-32 space-y-20">
        <Statistics />
        <Services />
        <VipTreatment />
      </main>
      <Testimonials />
      <Faqs />
      <GetStarted />
      <AboutUs />
    </div>
  );
}


export default Home;
