import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";
import Head from "next/head";

interface LayoutType {
  children: React.ReactNode;
}

const index = ({ children }: LayoutType) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main className="main">
        <div className="container">
          <Nav />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};
export default index;
