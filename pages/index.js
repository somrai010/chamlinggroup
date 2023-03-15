import Head from "next/head";
import { ContactUs } from "../src/components/ContactUs";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Mission } from "../src/components/Mission";
import { Navbar } from "../src/components/Navbar";
import { NavHeader } from "../src/components/NavHeader";
import { SocialChannel } from "../src/components/SocialChannel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chamling Group Pvt. Ltd.</title>
        <meta
          name="description"
          content="Chamling group is group of companies registered in pokhara with the aim of changing the nation."
        />
        <meta name='keywords' content="Chamling group, Chamling brand, Chamling company, Chamling organizations, Chamling factories, Chamling cycle "/>
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="Chamling Group Pvt. Ltd." />
        <meta property="og:image" content="/chamlingcover.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <NavHeader />

        <Navbar />

        <Header />
        <Mission />
        <SocialChannel />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
