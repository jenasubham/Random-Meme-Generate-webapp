import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const useGif = (tag) => {

  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMeneUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

   const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState('');

  
  async function fetchData(){
    setLoading(true);

    const {data} = await axios.get(tag ? tagMeneUrl : randomMemeUrl);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  
  return {gif, loading, fetchData}
  
}

export default useGif