import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../utils/firebaseConfig'
import { RiCheckboxCircleFill, RiFileCopyLine, RiMailFill, RiWhatsappLine } from '@remixicon/react'
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
  console.log(Math.floor(4.5));


  return (
    <section className='md:pt-28 pt-20 w-full font-[Lora]'>
      <ScrollUp />
      <div className='w-full flex flex-col items-center gap-6'>
        <div className='md:w-[60%] w-11/12'>
          <h1 className='text-color-primary font-bold text-2xl md:text-5xl mb-3 md:mb-6'>{blog?.title}</h1>
          <p className='font-medium md:mt-2 md:text-lg'>{blog?.para}</p>

          <div className='pt-3 pb-3 mt-2 flex gap-2 items-center border-t border-b border-gray-200'>
            <p className='font-medium text-color-primary'>Share Blog</p>
            <span onClick={copyUrl} className='ml-8 cursor-pointer'><RiFileCopyLine size={20} color='gray' /></span>
            <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}`}><RiMailFill size={20} color='gray' /></a>
          </div>
        </div>

        <div className='md:w-[60%] w-[88%] gap-6'>
          <img className='h-30 max-h-[500px] shadow-2xl rounded-md w-full' height={400} width={400} src={blog?.image[0]} alt='blog-image' />
          <div className='content flex flex-col'>
            {blog?.content?.map((cont, i) => (
              <>
                <h2 className='md:text-3xl text-2xl font-semibold text-color-primary pt-8 pb-4'>{cont.head}</h2>
                <p className='min-w-[75%]'>{cont.content}</p>
                {(i === (blog.content.length - Math.floor(blog.content.length/2)) && blog?.image.length > 1)  && (
                  <img className='h-30 my-6 max-h-[500px] shadow-2xl rounded-md w-full' height={400} width={400} src={blog?.image[1]} alt='blog-image' />
                )}
                {cont.h3?.length > 0 && (
                  cont.h3.map(h3 => (
                    <>
                      <h3 className='md:text-2xl text-xl font-medium text-color-primary py-4'>{h3.head}</h3>
                      {h3.content !== '' && <p>{h3.content}</p>}
                      {h3.bulletContent.length > 0 && (
                        h3.bulletContent.map(bullets => (
                          <span className='flex items-center pt-2 gap-2'>
                            <span className='items-end'><RiCheckboxCircleFill size={17} color='#8648ef' /></span>
                            <li className='inline-block list-none ml-2 bullet-list'><span className='font-semibold'>{bullets.includes(':') ? bullets.split(':')[0] + ':' : ''}</span>{bullets.includes(':') ? bullets.split(':')[1] : bullets}</li>
                          </span>
                        ))
                      )}
                    </>
                  ))
                )}
              </>
            ))}
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