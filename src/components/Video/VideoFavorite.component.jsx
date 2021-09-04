import React, { useEffect, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import grey from '@material-ui/core/colors/grey';
import { useGlobal } from '../../providers/Global';
import { isVideoFavorite } from '../../utils/favsHelper';

const VideoFavorite = ({ video, dark }) => {
  const { id } = video;
  const [isFavorite, setIsFavorite] = useState(false);
  const { state, dispatch } = useGlobal();
  const { userFavorites } = state;

  useEffect(() => {
    const isFav = isVideoFavorite(userFavorites, id);
    setIsFavorite(isFav);
  }, [userFavorites, id]);

  const handleClick = () => {
    const dispatchType = isFavorite ? 'remove_from_favorites' : 'add_to_favorites';
    const dispatchPayload = isFavorite ? id : video;
    dispatch({ type: dispatchType, payload: dispatchPayload });
  };

  const lightGrey = grey[200];
  const darkGrey = grey[700];
  const iconStyle = {
    fontSize: 27,
    color: dark ? lightGrey : darkGrey,
  };

  return (
    <Tooltip
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      placement="left"
      arrow
    >
      <IconButton aria-label="add to favorites" onClick={handleClick}>
        {isFavorite ? (
          <FavoriteIcon color="secondary" style={{ fontSize: 27 }} />
        ) : (
          <FavoriteBorderIcon style={iconStyle} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default VideoFavorite;
