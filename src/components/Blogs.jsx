import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Blog from './Blog';

const Blogs = () => {

    const {posts , loading , mode} =useContext(AppContext);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-3 my-[50px]">

        {
            loading ? <Spinner/> : ( posts.length === 0 ?

            (<div className={`flex items-center justify-center h-screen ${mode ? 'text-black' : 'text-white'} `}>
                <p>Blogs not found</p>
            </div>) :
            
                posts.map((post) => {return (
                     
                    <Blog key={post.id} blog={post}/>
                
                )})
            )
        }
      
    </div>
  )
}

export default Blogs
