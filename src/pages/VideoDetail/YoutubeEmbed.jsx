import React from 'react';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({embedId}) => {
    
    YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
    }
    
    return (
        <div>
            <iframe
                width="800"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameborser="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default YoutubeEmbed;