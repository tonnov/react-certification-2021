import { useEffect, useState } from 'react';
import { YoutubeApi } from '../Youtube/YoutubeApi';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
let params = {};
let term = '';

export const useVideos = (query) => {
  const [videos, setVideos] = useState([]);
  const { fetchData } = YoutubeApi();

  useEffect(() => {
    const runAsync = async () => {
      const data = await fetchData(term, params);
      setVideos(data || []);
      localStorage.setItem('storedQuery', JSON.stringify({ storedQuery: query, data }));
    };
    term = 'search';
    params = {
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      key: YOUTUBE_API_KEY,
      q: query,
    };

    // runAsync();

    const storedData = JSON.parse(localStorage.getItem('storedQuery'));

    if (storedData) {
      const { storedQuery, data } = storedData;

      if (data?.items.length > 0 && query.trim() === storedQuery.trim()) {
        setVideos(data);
        console.log('data served from storage');
      } else {
        runAsync();
      }
    } else {
      runAsync();
    }
  }, [query, fetchData]);

  return videos;
};

export const useVideo = (videoId) => {
  const [video, setVideo] = useState(null);
  const { fetchData } = YoutubeApi();

  useEffect(() => {
    if (!videoId || videoId.length < 1) return;

    const runAsync = async () => {
      const data = await fetchData(term, params);
      setVideo((data && data.items[0]) || []);
    };
    term = 'videos';
    params = {
      part: 'snippet,statistics',
      key: YOUTUBE_API_KEY,
      id: videoId,
    };

    runAsync();
  }, [videoId, fetchData]);

  return video;
};

export const useRelatedVideos = (videoId) => {
  const [videos, setVideos] = useState(null);
  const { fetchData } = YoutubeApi();

  useEffect(() => {
    if (!videoId || videoId.length < 1) return;

    const runAsync = async () => {
      const data = await fetchData(term, params);
      setVideos((data && data.items) || []);
    };
    term = 'search';
    params = {
      part: 'snippet',
      type: 'video',
      maxResults: 10,
      key: YOUTUBE_API_KEY,
      relatedToVideoId: videoId,
    };

    runAsync();
  }, [videoId, fetchData]);

  return videos;
};
