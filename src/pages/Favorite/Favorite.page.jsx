import React from 'react';
import { VideoList } from '../../components/Video';
import { useGlobal } from '../../providers/Global';
import { PageBody, PageTitle } from './Favorite.styled';

const FavoritePage = () => {
  const { state } = useGlobal();
  const { darkTheme, sessionData, userFavorites } = state;
  const { name } = sessionData;

  return (
    <PageBody>
      <PageTitle>{`${name}'s`} Favorites!</PageTitle>
      <VideoList videos={userFavorites} dark={darkTheme} origin="fav" />
    </PageBody>
  );
};

export default FavoritePage;
