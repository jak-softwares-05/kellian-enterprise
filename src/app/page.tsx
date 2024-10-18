import { HeroSection, Services, Statistics, VipTreatment } from "@/components";


const Home = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <main className="px-5 lg:px-32 space-y-20">
        <Statistics />
        <Services />
        <VipTreatment />
      </main>
    </div>
  );
}


export default Home;
