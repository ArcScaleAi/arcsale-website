import { RiInstagramLine, RiLinkedinBoxFill } from '@remixicon/react'
import { NavLink } from 'react-router-dom'

// Code for all the buttons
export const DemoButton = ({text = 'Get a Demo'}) => {
    return <div className='w-fit md:mx-0 mx-auto'>
        <NavLink to='/contact' className='px-6 hover:bg-[#762cf4] py-3 text-white tracking-wide text-lg w-fit font-medium rounded-full bg-color-primary'>{text}</NavLink>
    </div>
}

const handleModal = (setOpenModal, setContactHead, head) => {
    setOpenModal(true)
    setContactHead(head)
}

export const WaitlistButton = ({setOpenModal, setContactHead, head}) => {
    return <div className='w-fit md:mx-0 mx-auto'>
        <button onClick={() => handleModal(setOpenModal, setContactHead, head)} className='px-6 hover:bg-[#762cf4] py-3 text-white tracking-wide text-lg w-fit font-medium rounded-full bg-color-primary'>Join Waitlist</button>
    </div>
}

// Highlighting some words in a para
export const HighlightedWord = ({ text }) => {
    return <span className='text-black font-semibold'>{text}</span>
}

// Highlighting some words in Title
export const HighlightedTitle = ({ text }) => {
    return <span className='text-color-primary'>{text}</span>
}

// Highlighting some words in a Title (More dynamic way)
export const ReplaceTitleWord = ({sentence, selector}) => {
    let newStr;
    const allClass = document.querySelector(selector)
    if(sentence){
      newStr = sentence.replace(/\[([^\]]+)\]/g, `<span style = "color: #8648ef">$1</span>`)
    }
    if(allClass) allClass.innerHTML = newStr
  }

// Highlighting some words in a para (More dynamic way)
export const ReplaceParaWord = ({sentence, selector}) => {
    let newStr;
    const allClass = document.querySelector(selector)
    if(sentence){
      newStr = sentence.replace(/\[([^\]]+)\]/g, `<span style = "font-weight: 700;color: black">$1</span>`)
    }
    if(allClass) allClass.innerHTML = newStr
  }

// Inputs of Contact Page
export const ContactInput = ({ text, openModal, setInfo, register}) => {
    return <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
        <label className='text-color-primary ' htmlFor={text}>{text}</label>
        <input className={`h-[40px] p-3 focus:outline-none rounded-md w-full ${openModal ? 'border border-gray-300' : ''}`} type='text' id={text} />
    </div>
}

// Code for Social Media Links
export const FollowUs = () => {
    return <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-2xl'>Follow us</h1>
        <div className='flex gap-3'>
            <span className='p-3 hover:scale-110 w-14 bg-color-primary rounded-full'><RiLinkedinBoxFill size={32} color='white' /></span>
            <span className='p-3 hover:scale-110 w-14 bg-color-primary rounded-full'><RiInstagramLine size={32} color='white' /></span>
        </div>
    </div>
}

// Code for the whole contact section
export const ContactBox = () => {
    return <div className='w-full mt-10 relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src="./bg-4.jpeg" alt="bg" />

        <div className='w-full flex sm:flex-row flex-col gap-10 text-center justify-center sm:justify-around items-center px-10 py-10'>

            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-2xl'>Contact us</h2>
                <a className='mt-1 text-xl' href="">+919529030349</a>
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-2xl'>Email us</h2>
                <a className='mt-1 text-xl' href="">Contact@arcsaleai.com</a>
            </div>

            <FollowUs />

        </div>
    </div>
}

// Code for Nav Links
export function NavBtn({children, toPage}){
    return <NavLink to={`/${toPage}`}>{children}</NavLink>
}


// Hide Alert
const hideAlert = () => {
    const el = document.querySelector('.alert')
    if(el) el.parentElement.removeChild(el)
}


//Alert 
export function Alert(message = 'Something went wrong, Try Again') {
    const markup = `<div class='fixed alert md:left-[43%] left-[30%] top-8 py-2 px-6 rounded-md bg-[#F6BD60] text-white animate-alert-animate opacity-90 z-[3000]'>${message}</div>`
    document.querySelector('main')?.insertAdjacentHTML('afterbegin', markup)
    window.setTimeout(hideAlert, 5000)
}




