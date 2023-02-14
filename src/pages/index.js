import Banner from "components/Banner";
import Header from "components/Header";
import Head from "next/head";
import mockData from "/lib/data/mockData";
import mockData2 from "/lib/data/mockData2";
import SmallCard from "components/SmallCard";
import MediumCard from "components/MediumCard";
import LargeCard from "components/LargeCard";
import Footer from "components/Footer";

export default function Home({ exploreData, cardData }) {
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
        <section>
          <h2 className="text-4xl font-semibold pb-5">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            image="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = mockData;
  const cardData = mockData2;
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
