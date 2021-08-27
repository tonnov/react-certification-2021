import React from 'react'
import { useFavs } from '../../utils/hooks/useFavs';
import { VideoList } from '../../components/Video';
import { useGlobal } from '../../providers/Global';
import styled from 'styled-components';

export const PageBody = styled.section`
  margin: 5px;
  padding: 10px;
  background-color: inherit;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.15rem;
`;

const FavoritePage = () => {

    const { state } = useGlobal();
    const { darkTheme, sessionData } = state;
    const { name } = sessionData;

    const { allFavs } = useFavs();
    
    const videos = allFavs();

    return (
        <PageBody>
            <PageTitle>{`${name}'s`} Favorites!</PageTitle>
            <VideoList videos={videos} dark={darkTheme} origin={'fav'}/>
        </PageBody>
    )
}

export default FavoritePage
