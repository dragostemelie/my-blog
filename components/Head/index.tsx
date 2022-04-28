import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const PageHead = ({ title, description, image, url }: Props) => {
  /* Default Meta Tags */
  const defaultMeta = {
    title: "t.D. | My Blog",
    description:
      "A blog with articles about web development and other things that interest me.",
    image: "https://dragostemelie.go.ro/images/articles/social-banner.jpg",
    url: "https://dragostemelie.go.ro/",
  };

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title ? title : defaultMeta.title}</title>
      <meta
        name="description"
        content={description ? description : defaultMeta.description}
      />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={url ? url : defaultMeta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? title : defaultMeta.title} />
      <meta
        property="og:description"
        content={description ? description : defaultMeta.description}
      />
      <meta
        property="og:image"
        itemProp="image"
        content={image ? image : defaultMeta.image}
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="" />
      <meta property="twitter:url" content={url ? url : defaultMeta.url} />
      <meta name="twitter:title" content={title ? title : defaultMeta.title} />
      <meta
        name="twitter:description"
        content={description ? description : defaultMeta.description}
      />
      <meta name="twitter:image" content={image ? image : defaultMeta.image} />
    </Head>
  );
};
