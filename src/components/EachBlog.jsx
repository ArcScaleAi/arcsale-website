import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../utils/firebaseConfig'

const EachBlog = () => {
    const [blog, setBlog] = useState()
    const {blogId} = useParams()
    console.log(blogId);

    useEffect(() => {
        onValue(ref(database, 'data/Blogs/allBlogs'), (snapshot) => {
          if (snapshot !== null) {
            setBlog(...snapshot.val().filter(blog => blog.id === blogId))
          }
        }, {
            onlyOnce: true
        })
      }, [])

      console.log(blog);
  return (
    <section className='pt-28 w-full'>
        <div className='w-full flex flex-col items-center gap-10'>
            <h1 className='text-color-primary font-bold text-3xl text-center'>{blog?.title}</h1>
            <img height={400} width={400} src={blog?.image} alt='blog-image' />
        </div>
    </section>
  )
}

export default EachBlog