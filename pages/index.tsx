import Head from "next/head";

import articles from "data/articles.json";
import { Article } from "components/Cards/Article";
import { ArticleType } from "types";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";

interface IProps {
  articles: ArticleType[];
}

const Home = ({ articles }: IProps) => {
  return (
    <>
      <Head>
        <title>t.D. | My Blog</title>
        <meta
          name="description"
          content="A blog with articles about web development and other things that interest me."
        />
        <meta
          property="og:image"
          content="https://dragostemelie.go.ro/images/articles/social-banner.jpg"
        />
      </Head>
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
