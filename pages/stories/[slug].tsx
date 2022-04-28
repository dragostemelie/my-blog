import Head from "next/head";

import articles from "data/articles.json";
import { Article } from "components/Sections/Article";
import { ArticleType } from "types";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";
import { GetStaticPropsContext } from "next";

interface IProps {
  article: ArticleType;
}

const Story = ({ article }: IProps) => {
  return (
    <>
      <Head>
        <title>{`t.D. | ${article.title}`}</title>
        <meta name="description" content={article.description} />
        <meta property="og:image" content={article.image} />
      </Head>
      <PublicLayout>
        <Article {...article} />;
        <Spacer height="48px" />
      </PublicLayout>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context?.params?.slug?.toString();
  const article = articles.find((article) => article.slugname === slug);
  if (article) return { props: { article } };
  else return { notFound: true };
};

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slugname },
  }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default Story;
