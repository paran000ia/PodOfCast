import Header from "../components/Header";
import Footer from "../components/Footer";
import Episode1 from "../components/Episode1"
import PodOfCastApp from "../components/PodOfCastApp";
import RecentEpisodes from "../components/RecentEpisodes";

export default function Home() {
    return (
    <>
      <Header />
            <Episode1 />
            <RecentEpisodes />
            <PodOfCastApp />
      <Footer />
    </>
  );
}