import Head from "next/head";
import { useRouter } from "next/router";

function Videos({ results }) {
  const router = useRouter();

  console.log(results);
  return (
    <div className="h-screen flex items-start flex-col justify-center pl-24 relative py-[72px]">
      <Head>
        <title>{router.query.name}</title>
      </Head>
      <h2 className="text-3xl mb-5">
        Videos{" "}
        <span className="text-xl text-[#a3a3a3] border-l border-[#a3a3a3] pl-[15px] ml-[9px]">
          {router.query.name}
        </span>
      </h2>
      <div className="flex overflow-x-scroll">
        {/* {results.slice(0, 3).map((result) => (
          <div key={result.id} className="mr-4">
            <iframe
              width="424"
              height="278"
              src={`https://www.youtube.com/embed/${result.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
            <span className="block pt-4">{result.name}</span>
          </div>
        ))} */}
        {results.map((result) => (
          <div key={result.id} className="mr-4">
            <iframe
              width="424"
              height="278"
              src={`https://www.youtube.com/embed/${result.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
            <span className="block pt-4">{result.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;

export async function getServerSideProps(context) {
  const videos = await fetch(
    `https://api.themoviedb.org/3/tv/${context.query.id}/videos?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      results: videos.results,
    },
  };
}
