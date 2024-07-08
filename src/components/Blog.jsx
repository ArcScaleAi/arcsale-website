import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../utils/firebaseConfig'
import { Link } from 'react-router-dom'

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

  return (
    <section className='w-full py-10'>
        <div className='grid grid-cols-3 gap-10 w-5/6 mx-auto'>
            {allBlog?.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className='h-fit bg-[rgba(134,72,239,0.11)] p-6 rounded-md border border-color-primary shadow-2xl cursor-pointer'>
                    <img src={blog.image} alt="" />
                    <h2 className='text-center text-color-primary font-semibold py-4 text-2xl'>{blog.title}</h2>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Blog