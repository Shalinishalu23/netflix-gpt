import Header from './Header'
import useNowPlayingMovies from '../../src/hooks/useNowPlayingMovies.js'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
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
      <SecondaryContainer/>
    </div>
  )
}

export default Browse