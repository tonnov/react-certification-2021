import React, { useCallback, useContext } from 'react';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YoutubeApiContext = React.createContext(null);

export const useYoutubeApi = () => {
    const context = useContext(YoutubeApiContext);

    if(!context) {
        throw new Error('YoutubeApiProvider not available');
    }

    return context;
}


export const YouTubeApiProvider = ({ children }) => {

    const searchVideos = useCallback( async (query) => {
    
        const resp = {};
    
        try {
    
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${YOUTUBE_API_KEY}&q=${query}&type=video`
            );
            
            if (response.ok) {
                const data = await response.json();
                return data;
            }

            return resp;

        }
        catch (err) {
            return null;
        }
    }, []);

    const getVideo = useCallback(async (videoId) => {
        const resp = {};

        try {
    
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,player&id=${videoId}&key=${YOUTUBE_API_KEY}`);
            
            if (response.ok) {
                const data = await response.json();
                return data;
            }

            return resp;

        }
        catch (err) {
            return null;
        }

    },[]);

    const getRelatedVideos = useCallback(async (videoId) => {
        const resp = {};

        try {
    
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${YOUTUBE_API_KEY}&relatedToVideoId=${videoId}&type=video`
            );
            
            if (response.ok) {
                const data = await response.json();
                return data;
            }

            return resp;

        }
        catch (err) {
            return null;
        }
    },[]);


    return (

        <YoutubeApiContext.Provider value={{ searchVideos, getVideo, getRelatedVideos }} >
            { children }
        </YoutubeApiContext.Provider>
    )
}

export default YouTubeApiProvider;