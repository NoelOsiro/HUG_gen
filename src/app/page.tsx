import About from "@/components/About/About";
import Cause from "@/components/Causes/Cause";
import Donate from "@/components/Donate/Donate";
import Facts from "@/components/Facts/Facts";
import Hero from "@/components/Hero/Hero";
import Event from "@/components/Event/Event";
import Service from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <About/>
      <Service/>
      <Facts/>
      <Cause/>
      {/* <Donate/>
      <Event/>
      <Contact/> */}
    </main>
  );
}
