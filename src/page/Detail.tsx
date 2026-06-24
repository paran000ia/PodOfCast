import Header from "../components/Header";
import Footer from "../components/Footer";
import Episode1 from "../components/Episode1"
import LatestEpisode from "../components/LatestEpisode";
import PodOfCastApp from "../components/PodOfCastApp";

export default function Home() {
    return (
    <>
      <Header />
            <Episode1 />
            <LatestEpisode />
            <PodOfCastApp />
      <Footer />
    </>
  );
}