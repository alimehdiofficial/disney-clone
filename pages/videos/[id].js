import Head from "next/head";
import { useRouter } from "next/router";

function Videos({ results }) {
  const router = useRouter();

  return (
    <div className="pl-7 md:pl-24 relative py-36">
      <Head>
        <title>{router.query.name}</title>
      </Head>
      <h2 className="text-lg md:text-3xl -mb-1.5 md:mb-5">
        Videos{" "}
        <span className="block md:inline text-lg md:text-xl text-[#a3a3a3] border-l border-[#a3a3a3] pl-[15px] md:ml-[9px]">
          {router.query.name}
        </span>
      </h2>
      <div className="flex overflow-x-scroll relative scrollbar-hide">
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
              src={`https://www.youtube.com/embed/${result.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              className="w-[274px] h-[188px] md:w-[424px] md:h-[278px]"
            ></iframe>
            <span className="block pt-4">{result.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-1/4 right-0 bg-gradient-to-l from-[#040714] h-96 w-1/12" />
    </div>
  );
}

export default Videos;

export async function getServerSideProps(context) {
  const type = context.query.type;

  const videos = await fetch(
    `https://api.themoviedb.org/3/${type ? "tv" : "movie"}/${
      context.query.id
    }/videos?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      results: videos.results,
    },
  };
}
