import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovies } from "../utils/movieSlice";

const useMovies = (key) => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const storeData = useSelector((store) => store.movies[key]);

  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + key + "?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovies({ data: json.results, type: key }));
  };

  useEffect(() => {
    !storeData && getMovies();
  }, []);
};

export default useMovies;