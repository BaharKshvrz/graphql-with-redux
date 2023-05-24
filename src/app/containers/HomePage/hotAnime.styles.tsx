import styled from 'styled-components';

export const HotAnimeContaner= styled.div`
     width: 120rem;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
`;

export const AnimeItemContainer= styled.div`
   width: 20em;
   height: 20em;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const AnimeCover = styled.div`
    width: auto;
    height: 18em;

    img {
       width: auto;
       height: 100%;
    }
`;

export const AnimeTitle = styled.h6`
    margin-top: 8px;
    font-size: 15px;
    color: #000;
    font-weight: 500;
`;