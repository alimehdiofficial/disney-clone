import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import ImageSlider from "../components/ImageSlider";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";
import Viewers from "../components/Viewers";
import { auth } from "../firebase";
import requests from "../utils/requests";

export default function Home({ trendingResults, topRatedResults }) {
  const [user, loading] = useAuthState(auth);

  return (
    <main className="relative min-height-calc overflow-x-hidden block top-[72px] padding-calc after:bg-home-background after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:empty-content after:absolute after:inset-0 after:opacity-100 after:z-[-1]">
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageSlider />
      <Viewers />
      <Trending trendingResults={trendingResults} />
      <TopRated topRatedResults={topRatedResults} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  ).then((res) => res.json());

  const topRatedResults = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTopRated.url}`
  ).then((res) => res.json());

  return {
    props: {
      trendingResults: trendingResults.results,
      topRatedResults: topRatedResults.results,
    },
  };
}
