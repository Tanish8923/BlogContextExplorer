import React from 'react';
import { MdModeNight , MdOutlineLightMode } from "react-icons/md";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {

  const {mode , setMode} = useContext(AppContext);

  return (
    <header className={`py-1 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 flex ${mode ? 'bg-white' : 'bg-black border-b-blue-700 '}`}>
      <div className='max-w-[620px] w-11/12 flex mx-auto justify-between '>
        <h1 className={`font-bold text-3xl uppercase ${mode ? 'text-black' : 'text-white'} `}>Blogs</h1>
        <button onClick={() => setMode((prev) => !prev)}>
          {(mode) ? (<MdModeNight />) : (<MdOutlineLightMode fill='white'/>)}
        </button>
      </div>
    </header>
  )
}

export default Header
