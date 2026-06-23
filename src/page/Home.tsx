import ArticleNews from "../components/ArticleNews";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ListenersSay from "../components/ListenersSay";
import Membership from "../components/Membership";
import PodOfCastApp from "../components/PodOfCastApp";
import RecentEpisodes from "../components/RecentEpisodes";
import Sponsor from "../components/Sponsor";
import TalkListen from "../components/TalkListen";
import Footer from "../components/Footer";

export default function Home() {
    return (
    <>
      <Header />
      <Hero />
      <TalkListen />
      <ListenersSay />
      <Membership />
      <RecentEpisodes />
      <Sponsor />
      <ArticleNews/>
      <PodOfCastApp />
      <Footer />
    </>
  );
}