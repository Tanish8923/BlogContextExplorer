import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spinner = () => {

  const {mode} = useContext(AppContext);

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
       <div className='loader'></div>
       <p className={`${mode ? 'text-black' : 'text-white'}`}>Loading...</p>
    </div>
  )
}

export default Spinner
