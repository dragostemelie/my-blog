import Head from "next/head";
import type { NextPage } from "next";

import { About } from "components/Cards/About";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>t.D. | Abot Dragos</title>
        <meta
          name="description"
          content="A while ago, Dragos had the pleasure to explore the world of frontend development by finishing an online course. He was no stranger to programming before, but JavaScript was the one to become his favorite."
        />
        <meta
          property="og:image"
          content="https://dragostemelie.go.ro/images/articles/social-banner.jpg"
        />
      </Head>
      <PublicLayout>
        <Spacer height="48px" />
        <About />
        <Spacer height="48px" />
      </PublicLayout>
    </>
  );
};

export default AboutPage;
