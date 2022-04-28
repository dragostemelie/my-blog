import articles from "data/articles.json";
import { Article } from "components/Cards/Article";
import { ArticleType } from "types";
import { PageHead } from "components/Head";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";

interface IProps {
  articles: ArticleType[];
}

const Home = ({ articles }: IProps) => {
  return (
    <>
      <PageHead />
      <PublicLayout>
        <h1 style={{ textAlign: "center" }}>Stories</h1>
        <Spacer height="16px" />
        {articles.map((article) => {
          const props = {
            description: article.description,
            image: article.image,
            link: "/stories/" + article.slugname,
            subtitle: article.category,
            title: article.title,
          };
          return <Article key={article.id} {...props} />;
        })}
        <Spacer height="48px" />
      </PublicLayout>
    </>
  );
};

export const getStaticProps = async () => {
  return { props: { articles } };
};

export default Home;
