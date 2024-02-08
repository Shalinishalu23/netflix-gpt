import Header from './Header'
import useNowPlayingMovies from '../../src/hooks/useNowPlayingMovies.js'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovies from '../hooks/useMovies';

const Browse = () => {
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
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse