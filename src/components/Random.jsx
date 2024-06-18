import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-400 rounded-lg border-2 border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-3'>A Random Gif</h1>
      {
        loading ? (<Spinner/>) :(<img src={gif} alt="gif" width="450" />)
      }
      
      <button onClick={()=> fetchData()} className='w-10/12 bg-white uppercase font-semibold rounded-lg py-2 my-4'>
        Generate
      </button>
    </div>
  );
};

export default Random;
