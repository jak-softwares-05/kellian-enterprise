import { HeroSection, Services, Statistics } from "@/components";


const Home = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <main className="px-5 lg:px-32 space-y-10">
        <Statistics />
        <Services />
      </main>
    </div>
  );
}


export default Home;
