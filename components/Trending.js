import { useRouter } from "next/router";

function Trending({ trendingResults }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div className="pb-[26px]">
      <h4 className="font-semibold my-4">Trending</h4>
      {/* flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide */}
      {/* grid gap-6 grid-cols-2 md:grid-cols-4 */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {trendingResults.map((result) => (
          <div
            className="thumbnail-image-wrapper"
            key={result.id}
            onClick={() =>
              router.push(
                `/${result.media_type === "tv" ? "tv" : "movie"}/${result.id}`
              )
            }
          >
            <img
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              className="thumbnail-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
