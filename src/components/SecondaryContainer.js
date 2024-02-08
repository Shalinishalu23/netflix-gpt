import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log('movies: ', movies)
  console.log('movies.nowPlayingMovies: ', movies.nowPlayingMovies?.[0]);
  const nowPlaying = [movies.nowPlayingMovies?.[0],movies.nowPlayingMovies?.[1],movies.nowPlayingMovies?.[2],movies.nowPlayingMovies?.[3],movies.nowPlayingMovies?.[16],movies.nowPlayingMovies?.[17],movies.nowPlayingMovies?.[18],movies.nowPlayingMovies?.[19],movies.nowPlayingMovies?.[8],movies.nowPlayingMovies?.[9]]
  const trending = [movies.nowPlayingMovies?.[4],movies.nowPlayingMovies?.[5],movies.nowPlayingMovies?.[6],movies.nowPlayingMovies?.[7],movies.nowPlayingMovies?.[12],movies.nowPlayingMovies?.[13],movies.nowPlayingMovies?.[14],movies.nowPlayingMovies?.[15],movies.nowPlayingMovies?.[2],movies.nowPlayingMovies?.[3]]
  const upcomingMovies = [movies.nowPlayingMovies?.[12],movies.nowPlayingMovies?.[13],movies.nowPlayingMovies?.[14],movies.nowPlayingMovies?.[15],movies.nowPlayingMovies?.[16],movies.nowPlayingMovies?.[17],movies.nowPlayingMovies?.[18],movies.nowPlayingMovies?.[7],movies.nowPlayingMovies?.[6],movies.nowPlayingMovies?.[7]]
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={trending} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={upcomingMovies}
          />
          <MovieList title={"Horror"} movies={nowPlaying} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
