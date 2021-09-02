export const isVideoFavorite = (favorites, videoId) => {
  return favorites.some((fav) => fav.id === videoId);
};

export const excludeVideo = (favorites, videoId) => {
  return favorites.filter((fav) => fav.id !== videoId);
};
