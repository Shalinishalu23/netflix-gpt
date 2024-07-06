import Header from './Header'
import useNowPlayingMovies from '../../src/hooks/useNowPlayingMovies.js'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovies from '../hooks/useMovies';
import GptSearch from './GptSearch.js';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useMovies('top_rated')
  useMovies('upcoming')
  useMovies('now_playing')
  useMovies('popular')
  useNowPlayingMovies()
  return (
    <div><Header />
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
      {
        showGptSearch?
      <GptSearch /> :  <><MainContainer />
      <SecondaryContainer /></>
      }
    </div>
  )
}

export default Browse