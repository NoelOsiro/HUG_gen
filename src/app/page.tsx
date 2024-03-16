import About from "@/components/About/About";
import Facts from "@/components/Facts/Facts";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Services/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Service/>
      <Facts/>
    </main>
  );
}
