import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Blog = ({blog}) => {

    const {mode} = useContext(AppContext);

    let title = blog.title;
    let author = blog.author;
    let category = blog.category;
    let date = blog.date;
    let content = blog.content;
    let tags = blog.tags;
    

  return (
    <div className={`py-3 ${mode ? 'text-black' : 'text-white'} `}>

        <p className='font-bold text-sm '>{title}</p>
        <p className='text-[14px] '>By <span className='italic '>{author}</span> on <span className='underline font-bold '>{category}</span></p>
        <p className='text-[14px]'>Posted on {date}</p>
        <p className='text-[16px] mt-[13px]'>{content}</p>
        <div className='flex flex-wrap gap-x-2 items-center'>
            {
                tags.map((tag , index) => {
                    return(<span className='text-xs font-semibold underline text-blue-700 cursor-pointer' key={index}>#{tag}</span>)
                })
            }
        </div>
      
    </div>
  )
}

export default Blog
