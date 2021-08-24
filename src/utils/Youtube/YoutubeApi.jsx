import { useCallback } from 'react';

export const YoutubeApi = () => {
  const fetchData = useCallback(async (term, params_) => {
    const params = Object.entries(params_)
      .map(([key, val]) => `${key}=${val}`)
      .join('&');

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/${term}?${params}`
      );

      if (!response.ok) return null;

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
    return null;
  }, []);

  return { fetchData };
};
