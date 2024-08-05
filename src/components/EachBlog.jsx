import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../utils/firebaseConfig'
import { RiCheckboxCircleFill, RiFileCopyLine, RiMailFill } from '@remixicon/react'
import ScrollUp from '../utils/ScrollUp'
import { Alert, DemoButton } from '../utils'

const EachBlog = () => {
  const [blog, setBlog] = useState()
  const { blogId } = useParams()
  const url = window.location.href

  useEffect(() => {
    onValue(ref(database, 'data/Blogs/allBlogs'), (snapshot) => {
      if (snapshot !== null) {
        setBlog(...snapshot.val().filter(blog => blog.id === blogId))
      }
    }, {
      onlyOnce: true
    })
  }, [])

  const copyUrl = async () => {
    await navigator.clipboard.writeText(window.location.href)
    Alert('Link Copied')
  }


  return (
    <section className='md:pt-28 pt-20 w-full font-[Lora]'>
      <ScrollUp />
      <div className='w-full flex flex-col items-center gap-6'>
        <div className='md:w-[60%] w-11/12'>
          <h1 className='text-color-primary font-bold text-2xl md:text-5xl mb-3 md:mb-6'>{blog?.Title}</h1>
          {/* <p className='font-medium md:mt-2 md:text-lg'>{blog?.para}</p> */}

          <div className='pt-3 pb-3 mt-2 flex gap-2 items-center border-t border-b border-gray-200'>
            <p className='font-medium text-color-primary'>Share Blog</p>
            <span onClick={copyUrl} className='ml-8 cursor-pointer'><RiFileCopyLine size={20} color='gray' /></span>
            <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}`}><RiMailFill size={20} color='gray' /></a>
          </div>
        </div>

        <div className='md:w-[60%] w-[88%] gap-6'>
          {/* <img className='h-30 max-h-[500px] shadow-2xl rounded-md w-full' height={400} width={400} src={blog?.image[0]} alt='blog-image' /> */}
          <div className='prose blog-content'>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </div>
        </div>
        <div className='md:w-[60%] w-11/12 shadow-xl text-color-primary font-semibold p-6 flex gap-6 flex-col md:flex-row justify-between rounded-md border border-color-primary'>
          <p className='text-lg text-center'> Get Started with Arcsale AI </p>
          <p><DemoButton /></p>
        </div>

        <div className='pt-3 w-11/12 md:w-[60%] pb-3 mt-2 flex gap-2 items-center border-t border-b border-gray-200'>
          <p className='font-medium text-color-primary'>Share Blog</p>
          <span onClick={copyUrl} className='ml-8 cursor-pointer'><RiFileCopyLine size={20} color='gray' /></span>
          <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}`}><RiMailFill size={20} color='gray' /></a>
        </div>
      </div>
    </section>
  )
}

export default EachBlog