import Head from "next/head";

import Header from "@/components/ui/Header";
import OurServices from "@/components/ui/OurServices";
import Healthcare from "@/components/ui/Healthcare";
import MobileApps from "@/components/ui/MobileApps";
import Testimonials from "@/components/ui/Testimonials";
import Article from "@/components/ui/Article";

export default function Home() {
  return (
    <>
      <Head>
        <title>{HeadSeo.title}</title>
      </Head>
      <Header />
      <OurServices />
      <Healthcare />
      <MobileApps />
      <Testimonials />
      <Article />
    </>
  );
}

const HeadSeo = {
  title: "Home Page",
};
