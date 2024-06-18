import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {

  const [tag, setTag] = useState("Coder");

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border-2 border-gray-500 flex flex-col items-center gap-y-4 mt-[15px] mb-10'>
      <h1 className='text-2xl underline uppercase font-bold mt-3'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) :(<img src={gif} alt="gif" width="450" />)
      }
      
      <input 
      type="text"  
      className='w-10/12 bg-white font-semibold rounded-lg py-2 mt-6 outline-none text-center'
      onChange={ (e)=> setTag(e.target.value)}
      value = {tag}
      />
      <button onClick={()=> fetchData()} className='w-10/12 bg-gray-200 uppercase font-semibold rounded-lg py-2 mb-6 hover:bg-white'>
        Generate
      </button>
    </div>
  );
};

export default Tag;
