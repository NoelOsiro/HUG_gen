import About from "@/components/About/About";
import Cause from "@/components/Causes/Cause";
import Donate from "@/components/Donate/Donate";
import Facts from "@/components/Facts/Facts";
import Hero from "@/components/Hero/Hero";
// import Event from "@/components/Event/Event";
import Service from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-blacksection transition-colors duration-300">
      <ClientOnly fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-blacksection">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-waterloo">Loading...</p>
          </div>
        </div>
      }>
        <Hero />
        <div className="space-y-20 lg:space-y-32">
          <About />
          <Service />
          <Facts />
          <Cause />
          <Donate />
          {/* <Event /> */}
          {/* <Contact /> */}
        </div>
      </ClientOnly>
    </main>
  );
}

