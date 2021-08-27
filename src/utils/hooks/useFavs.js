import { useEffect, useState } from 'react';
import { storage } from '../storage';
import { SESSION_FAVORITES } from '../constants';

export const useFavs = () => {
  const [videoFavs, setVideoFavs] = useState(() => {
    const storedFavs = storage.get(SESSION_FAVORITES);
    return storedFavs || [];
  });

  useEffect(() => {
    storage.set(SESSION_FAVORITES, videoFavs);
  }, [videoFavs]);

  const addFav = (video) => {
    setVideoFavs((preFavs) => {
      return [...preFavs, video];
    });
  };

  const remFav = (videoId) => {
    const newFavs = videoFavs.filter((fav) => fav.id !== videoId);
    setVideoFavs(newFavs);
  };

  const findFav = (videoId) => {
    let ret = false;
    const favFound = videoFavs.findIndex((fav) => fav.id === videoId);
    if (favFound >= 0) ret = true;
    return ret;
  };

  const allOtherFavs = (videoId) => {
    const otherFavs = videoFavs.filter((fav) => fav.id !== videoId);
    return otherFavs;
  };

  const allFavs = () => {
    return videoFavs;
  };

  return { addFav, remFav, findFav, allOtherFavs, allFavs };
};

export default useFavs;
