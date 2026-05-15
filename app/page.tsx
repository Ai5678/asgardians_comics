import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import NewRelease from "./components/NewRelease";
import SubscriptionService from "./components/SubscriptionService";

export default function Home() {
  return (
    <>
      <Navbar />
      <Marquee />
      <Hero />
      <NewRelease />
      <SubscriptionService />
    </>
  );
}
