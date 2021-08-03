// import React from 'react'

const YoutubeSearch = async (term) => {
  const KEY = 'AIzaSyBCe-B_Q0JniKrA_zEx022ueYGc7RlkU_E';

  const resp = {
    response: 0,
    data: {},
  };

  // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term}/`);

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxresults=25&key=${KEY}&q=${term}`
  );
  resp.response = response.status;

  if (response.ok) {
    const data = await response.json();
    resp.data = data;
  }

  return resp;
};

export default YoutubeSearch;
