import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutPodOfCast from "../components/AboutPodOfCast"
import ListenersSay2 from "../components/ListenersSay2"
import FounderMain from "../components/FounderMain";
import Sponsor2 from "../components/Sponsor2";
import GetInTouch from "../components/GetInTouch";
import PodOfCastApp from "../components/PodOfCastApp";

export default function Home() {
    return (
    <>
      <Header />
      <AboutPodOfCast />
      <ListenersSay2 />
      <FounderMain />
      <Sponsor2 />
      <GetInTouch />
      <PodOfCastApp />
      <Footer />
    </>
  );
}