import React, { useEffect, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useFavs } from '../../utils/hooks/useFavs';

const VideoFavorite = ({video}) => {
    const { addFav, remFav, findFav } = useFavs();
    const { id } = video;
    const [isFav, setIsFav] = useState(null);
  
    // const [isFav, setIsFav] = useState(() =>{
    //   return findFav(id);
    // });
  
    useEffect(() => {
      const isInFavs = findFav(id);
      setIsFav(isInFavs)
    },[findFav, id]);
  
    const handleClick = () => {
      if(isFav) {
        remFav(id);
      } else {
        addFav(video);
      }
      // isFav ? remFav(id) : addFav(video);
    }
    
    return (
        <Tooltip title={isFav ? "Eliminar de Favs" : "Agregar a Favs"} placement="left" arrow>
          <IconButton aria-label="add to favorites" onClick={handleClick} >
            { isFav ? <FavoriteIcon color="secondary" style={{ fontSize: 27 }} /> : <FavoriteBorderIcon style={{ fontSize: 27 }} /> }
          </IconButton>
        </Tooltip>
    )
  }

  export default VideoFavorite;