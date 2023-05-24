import { createSelector } from "@reduxjs/toolkit"
import { makeSelectAnimePage } from "./selectors";
import { useAppSelector } from "../../hooks";
import { AnimeCover, AnimeItemContainer, AnimeTitle, HotAnimeContaner } from "./hotAnime.styles";

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
    animePage,
}));

const HotAnime = () => {
 const { animePage } = useAppSelector(stateSelector);
 const isEmptyAnimePage = !animePage || !animePage.media || !animePage.media.length;
 if (isEmptyAnimePage) return <div>Loading...</div>;

 return <HotAnimeContaner>
       { animePage && animePage.media && animePage.media.map(anime => (
          <AnimeItemContainer>
            <AnimeCover>
              <img alt={anime?.title?.english || "anime"} src={anime?.coverImage?.extraLarge || ""} />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        ))
       }
     </HotAnimeContaner>
}

export default HotAnime
