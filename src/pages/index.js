import Header from "components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
    </div>
  );
}
