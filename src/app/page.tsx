import { HeroSection, Statistics } from "@/components";


const Home = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <main className="px-10 lg:px-32">
        <Statistics />
      </main>
    </div>
  );
}


export default Home;
