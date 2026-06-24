import Header from "../components/Header";
import Footer from "../components/Footer";
import PodOfCastApp from "../components/PodOfCastApp";
import LatestPosts from "../components/LatestPosts";
import ArticleAndNews from "../components/ArticleAndNews";

export default function Home() {
    return (
    <>
      <Header />
            <ArticleAndNews />
            <LatestPosts />
            <PodOfCastApp />
      <Footer />
    </>
  );
}