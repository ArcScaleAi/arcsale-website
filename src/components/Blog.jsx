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
          <section key={blog.id} className='h-fit border shadow-xl border-gray-300 pb-3 p-6 rounded-md'>
            <img height={500} width={500} className='rounded-md' src={blog.image[0]} alt="" />
            <Link to={`/blog/${blog.id}`}>
              <h2 className='font-medium text-color-primary cursor-pointer py-4 text-xl'>{blog.title}</h2>
            </Link>
            <div className='flex gap-6 justify-between mt-2'>
              <span>{blog.date}</span>
              <div className='flex gap-2'>
                <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}/blog/${blog.id}`}><RiMailFill size={20} color='gray' /></a>
                <span>{blog.time}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Blog