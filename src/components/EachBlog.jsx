import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../utils/firebaseConfig'
import { RiCheckboxCircleFill, RiMailFill, RiWhatsappLine } from '@remixicon/react'

const EachBlog = () => {
  const [blog, setBlog] = useState()
  const { blogId } = useParams()
  const url = window.location.href
  const whatsappUrl = encodeURIComponent(window.location.href)

  useEffect(() => {
    onValue(ref(database, 'data/Blogs/allBlogs'), (snapshot) => {
      if (snapshot !== null) {
        setBlog(...snapshot.val().filter(blog => blog.id === blogId))
      }
    }, {
      onlyOnce: true
    })
  }, [])



  return (
    <section className='pt-28 w-full font-[Lora]'>
      <div className='w-full flex flex-col items-center gap-6'>
        <div className='w-[60%]'>
          <h1 className='text-color-primary font-bold text-5xl mb-6'>{blog?.title}</h1>
          <p className='font-medium mt-2 text-lg'>{blog?.para}</p>
          <div className='mt-2 flex gap-2'>
            <a href={`https://api.whatsapp.com/send?text=Check%20out%20this%20blog%20page:${whatsappUrl}`} target="_blank">{<RiWhatsappLine size={20} color='gray' />}</a>
            <a href={`mailto:?subject=Check out this blog page&body=Here is the link to the blog page: ${url}`}><RiMailFill size={20} color='gray' /></a>
          </div>
        </div>

        <div className='w-[60%] gap-6'>
          <img className='h-30 max-h-[500px] shadow-2xl rounded-md w-full' height={400} width={400} src={blog?.image} alt='blog-image' />
          <div className='content flex flex-col'>
            {blog?.content?.map(cont => (
              <>
                <h2 className='text-3xl font-semibold text-color-primary pt-8 pb-4'>{cont.head}</h2>
                <p className='min-w-[75%]'>{cont.content}</p>
                {cont.h3?.length > 0 && (
                  cont.h3.map(h3 => (
                    <>
                      <h3 className='text-2xl font-medium text-color-primary py-4'>{h3.head}</h3>
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
      </div>
    </section>
  )
}

export default EachBlog