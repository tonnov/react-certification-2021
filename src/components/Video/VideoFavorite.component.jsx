import React, { useEffect, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import grey from '@material-ui/core/colors/grey';

import { useFavs } from '../../utils/hooks/useFavs';

const VideoFavorite = ({ video, dark }) => {
  const { addFav, remFav, findFav } = useFavs();
  const { id } = video;
  const [isFav, setIsFav] = useState(null);

  // const [isFav, setIsFav] = useState(() =>{
  //   return findFav(id);
  // });

  useEffect(() => {
    const isInFavs = findFav(id);
    setIsFav(isInFavs);
  }, [findFav, id]);

  const handleClick = () => {
    if (isFav) {
      remFav(id);
    } else {
      addFav(video);
    }
    // isFav ? remFav(id) : addFav(video);
  };

  const lightGrey = grey[200];
  const darkGrey = grey[700];
  const iconStyle = {
    fontSize: 27,
    color: (dark ? lightGrey : darkGrey)
  }
  // iconStyle.color = dark ? "gray" : "disabled";

  return (
    <Tooltip title={isFav ? 'Remove from Favorites' : 'Add to Favorites'} placement="left" arrow>
      <IconButton aria-label="add to favorites" onClick={handleClick}>
        {isFav ? (
          <FavoriteIcon color="secondary" style={{ fontSize: 27 }} />
        ) : (
          <FavoriteBorderIcon style={iconStyle} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default VideoFavorite;
