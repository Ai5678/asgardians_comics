import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import NewRelease from "./components/NewRelease";
import SubscriptionService from "./components/SubscriptionService";
import TradeAppraisal from "./components/TradeAppraisal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <Marquee />
      </div>
      <Hero />
      <NewRelease />
      <SubscriptionService />
      <TradeAppraisal />
      <Footer />
    </>
  );
}
