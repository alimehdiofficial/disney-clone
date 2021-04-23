import Head from "next/head";
import { useRouter } from "next/router";

function TV({ tv }) {
  console.log(tv);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div className="relative min-height-calc overflow-hidden block top-[72px] padding-calc">
      <Head>
        <title>{tv.title || tv.original_name}</title>
      </Head>
      <div className="left-0 opacity-80 fixed right-0 top-0 z-[-1]">
        <img
          src={
            `${BASE_URL}${tv.backdrop_path || tv.poster_path}` ||
            `${BASE_URL}${tv.poster_path}`
          }
          alt={tv.title || tv.original_name}
          className="w-initial md:w-screen h-screen object-cover lg:object-fill"
        />
      </div>

      {tv.poster_path && (
        <div className="flex items-end justify-start mx-auto h-[30vw] min-h-[170px] pb-6 w-full">
          <img
            src={`${BASE_URL}${tv.poster_path}`}
            alt={tv.poster_path}
            className="max-w-[600px] min-w-[200px] w-[35vw]"
          />
        </div>
      )}

      <div className="max-w-[874px]">
        <div className="flex items-center my-6 min-h-[56px]">
          <button className="player-button">
            <img
              src="https://disney-clone-d1e27.web.app/images/play-icon-black.svg"
              alt=""
              className="w-6 md:w-8"
            />
            <span>Play</span>
          </button>

          <button
            className="trailer-button"
            onClick={() =>
              router.push(
                `/videos/${tv.id}?name=${tv.title || tv.original_name}`
              )
            }
          >
            <img
              src="https://disney-clone-d1e27.web.app/images/play-icon-white.svg"
              alt=""
              className="w-6 md:w-8"
            />
            <span>Trailer</span>
          </button>

          <div className="mr-4 h-11 w-11 flex justify-center items-center bg-black bg-opacity-60 rounded-full border-2 cursor-pointer">
            <span className="bg-[#f9f9f9] inline-block h-[2px] transform translate-x-[1px] rotate-0 w-4" />
            <span className="bg-[#f9f9f9] inline-block h-4 transform translate-x-[-8px] rotate-0 w-[2px]" />
          </div>

          <div className="h-11 w-11 rounded-full flex justify-center items-center cursor-pointer bg-white">
            <div className="h-10 w-10 bg-black rounded-full">
              <img
                src="https://disney-clone-d1e27.web.app/images/group-icon.svg"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="text-xs md:text-[15px] min-h-[20px]">
          {tv.media_type && `${tv.media_type} •`}{" "}
          {tv.release_date || tv.first_air_date} • {tv.number_of_seasons}{" "}
          {tv.number_of_seasons === 1 ? "Season" : "Seasons"} •{" "}
          {tv.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < tv.genres.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="text-sm md:text-xl py-4">{tv.overview}</div>
      </div>
    </div>
  );
}

export default TV;

export async function getServerSideProps(context) {
  const tv = await fetch(
    `https://api.themoviedb.org/3/tv/${context.query.id}?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      tv: tv,
    },
  };
}
