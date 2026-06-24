import Header from "../components/Header";
import Footer from "../components/Footer";
import PodOfCastApp from "../components/PodOfCastApp";
import ArticleDetailsHero from "../components/ArticleDetailsHero";
import ArticleBanner from "../components/ArticleBanner";
import ArticleContent from "../components/ArticleContent";
import RelatedArticle from "../components/RelatedArticle";


export default function Home() {
    return (
    <>
      <Header />
            <ArticleDetailsHero />
            <ArticleBanner />
            <ArticleContent />
            <RelatedArticle />
            <PodOfCastApp />
      <Footer />
    </>
  );
}