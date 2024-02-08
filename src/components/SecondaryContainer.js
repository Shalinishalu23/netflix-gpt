import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.now_playing && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"now playing"} movies={movies.now_playing} />
          <MovieList title={"Top Rated"} movies={movies.top_rated} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
          <MovieList title={"Popular"} movies={movies.popular} />
          <MovieList title={"Horror"} movies={movies.now_playing} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
