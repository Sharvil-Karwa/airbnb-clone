import Banner from "components/Banner";
import Header from "components/Header";
import Head from "next/head";
import mockData from "mockData";
import SmallCard from "components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                image={img}
                distance={distance}
                location={location}
                key={img}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = mockData;
  return {
    props: {
      exploreData,
    },
  };
}
