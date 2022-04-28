import type { NextPage } from "next";

import { About } from "components/Cards/About";
import { PublicLayout } from "components/Layouts";
import { Spacer } from "components/UI/Spacer";
import { PageHead } from "components/Head";

const AboutPage: NextPage = () => {
  return (
    <>
      <PageHead
        title="t.D. | Abot Dragos"
        description="A while ago, Dragos had the pleasure to explore the world of frontend development by finishing an online course. He was no stranger to programming before, but JavaScript was the one to become his favorite."
        url="https://dragostemelie.go.ro/about"
      />
      <PublicLayout>
        <Spacer height="48px" />
        <About />
        <Spacer height="48px" />
      </PublicLayout>
    </>
  );
};

export default AboutPage;
