import { RiArrowUpSLine } from '@remixicon/react';
import React from 'react'

const ScrollUp = () => {

    const handleScroll = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

      window.addEventListener('scroll', () => {
        const scrollBtn = document.querySelector('.scroll')
          if(window.scrollY < 1000){
            scrollBtn?.classList.add('hidden')
          }else{
            scrollBtn?.classList.remove('hidden')
          }
        })

  return (
    <div onClick={handleScroll} className={`p-2 scroll hidden bg-color-primary z-[1100] cursor-pointer fixed rounded-full bottom-8 right-10`}><RiArrowUpSLine color='white' size={30}/></div>
  )
}

export default ScrollUp