import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../utils/firebaseConfig'
import { Link } from 'react-router-dom'
import { RiMailFill } from '@remixicon/react'

const Blog = () => {
  const [allBlog, setAllBlog] = useState([])

  useEffect(() => {
    onValue(ref(database, 'data/Blogs/allBlogs'), (snapshot) => {
      if (snapshot !== null) {
        setAllBlog(snapshot.val())
      }
    }, {
      onlyOnce: true
    })
  }, [])
  console.log(allBlog);

  const url = window.location.origin

  return (
    <section className='w-full py-10'>
      <div className='md:grid grid-cols-3 gap-10 w-11/12 md:w-5/6 mx-auto'>
        {allBlog?.map(blog => (
          <section key={blog.id} className='relative flex flex-col justify-between border shadow-xl border-gray-300 pb-3 p-6 rounded-md'>
            <div>
              <img height={160} width={300} className='h-[200px] rounded-md' src={blog.Image} alt="" />
              <Link to={`/blog/${blog.id}`}>
                <h2 className='font-medium text-color-primary cursor-pointer py-4 text-xl'>{blog.Title}</h2>
              </Link>
            </div>
            <div className='flex gap-6 justify-between mt-2'>
              <span>{blog.Date}</span>
              <div className='flex gap-2'>
                <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}/blog/${blog.id}`}><RiMailFill size={20} color='gray' /></a>
                <span>{blog.Time}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Blog