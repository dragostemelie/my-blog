import { GetStaticPropsContext } from "next";

import articles from "data/articles.json";
import { Article } from "components/Sections/Article";
import { ArticleType } from "types";
import { PageHead } from "components/Head";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";

interface IProps {
  article: ArticleType;
}

const Story = ({ article }: IProps) => {
  return (
    <>
      <PageHead
        title={`t.D. | ${article.title}`}
        description={article.description}
        image={article.image}
        url={`https://dragostemelie.go.ro/stories/${article.slugname}`}
      />
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
