import useNowPlayingMovies from '../utils/customhooks/useNowPlayingMovies'
import ExploreMovies from './ExploreMovies';
import { Header } from './Header'
import MainMovie from './MainMovie';
import "../Stylesheets/index.css"
import usePopularMovies from "../utils/customhooks/usePopularMovies"
import useTopRated from '../utils/customhooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


export const Browse = () => {
  const isGpt = useSelector((store)=>store.isGpt);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  return (
  <div id='main'>
    <Header/>

    {!isGpt ? <><MainMovie/><ExploreMovies/></> : <><GptSearch/></>}
    
    
    
    </div>
  )
}
