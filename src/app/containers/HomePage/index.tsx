import { useEffect } from 'react';
import {Dispatch} from 'redux';
import animeService from '../../services/animeService';
import { Container } from './homePage.styles';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { setAnimatePage } from './homePageSlice';
import { useAppDispatch } from '../../hooks';
import HotAnime from './hotAnime';

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
    setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimatePage(page))
});

const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  useEffect(() => {
    const fetchAnimePage = async() => {
      const animePage = await animeService.getAnimePage(0, 200).catch((err) => {
       console.log("Error: ", err);
     });

     if (animePage) setAnimePage(animePage);
     console.log("Anime list:", animePage);
   }
    fetchAnimePage();
  }, []);

  return <Container>  
           <h1>HotAnime</h1>
         <HotAnime/>
    </Container>
}

export default HomePage;
