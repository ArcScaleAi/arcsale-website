import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../utils/firebaseConfig'
import { ReplaceTitleWord } from '../utils'
import Blog from '../components/Blog'
import { Outlet } from 'react-router-dom'

const Blogs = () => {
    const [blogs, setBlogs] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/Blogs'), (snapshot) => {
          if (snapshot !== null) {
            setBlogs(snapshot.val())
          }
        }, {
            onlyOnce: true
        })
      }, [])

  return (
    <>
    <section className='w-full'>
    <div className='w-full relative'>
      <img className='absolute top-0 left-0 h-full w-full -z-10' src={blogs?.bg} alt="" />

      <div className='pt-36 md:pb-10'>
        <h1 className='w-full text-center aboutus-title text-5xl font-bold'>{<ReplaceTitleWord sentence={blogs?.title} selector={'.aboutus-title'}/>}</h1>
      </div>
    </div>

    <Blog />
  </section>
  <Outlet />
    </>
  )
}

export default Blogs