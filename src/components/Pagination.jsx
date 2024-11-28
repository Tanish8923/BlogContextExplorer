import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page , totalPages , handlePageChange , mode} = useContext(AppContext);

  return (
    <div className={`fixed bottom-0 inset-x-0 py-1 border-t-2 border-t-gray-300  w-full ${mode ? 'bg-white' : 'bg-black border-t-blue-700 '}`}>
        <footer className='w-11/12 max-w-[620px] flex justify-between mx-auto  '>
            <div className='flex items-center gap-x-3 w-11/12 max-w-2xl '>
                {
                 page > 1 &&(
                    <button className={`border-2 border-gray-300 py-[2px] px-4 rounded-md ${mode ? 'text-black' : 'text-white'} `} onClick={()=> handlePageChange(page-1)}>Previous</button>
                 ) 
                }
                {
                    page < totalPages &&(
                        <button className={`border-2 border-gray-300 py-[2px] px-4 rounded-md ${mode ? 'text-black' : 'text-white'} `} onClick={()=> handlePageChange(page+1)}>Next</button>
                     ) 
                }
            </div>
            <span className={`text-sm font-semibold min-w-[80px] mt-1 ${mode ? 'text-black' : 'text-white'} `}>Page {page} of {totalPages} </span>
        </footer>
    </div>
  )
}

export default Pagination
