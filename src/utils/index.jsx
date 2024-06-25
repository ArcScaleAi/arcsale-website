import { NavLink } from 'react-router-dom'
import {EmailContact, FollowUs} from './EmailContact'

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


// Code for the whole contact section
export const ContactBox = ({bg}) => {
    return <div className='w-full mt-10 relative'>
        <img className='absolute top-0 left-0 h-full w-full -z-10' src={bg} alt="bg" />

        <div className='w-full flex sm:flex-row flex-col gap-10 text-center justify-center sm:justify-around items-center px-10 py-10'>
            <EmailContact />
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

export const GetADemo = ({sentence, selector}) => {
    return <div className='text-center flex flex-col items-center gap-10 my-12 bg-[rgba(134,72,239,0.11)] border border-color-primary py-10 w-11/12 mx-auto px-4 rounded-xl'>
    <p className={`md:text-5xl md:w-full text-2xl ${selector} font-bold`}><ReplaceTitleWord sentence={sentence} selector={`.${selector}`}/></p>
    <div className='w-fit md:mx-0 mx-auto'>
          <NavLink to='/contact' className='px-10 hover:bg-[#762cf4] py-4 text-white tracking-wide text-2xl w-fit font-medium rounded-full bg-color-primary'>Demo</NavLink>
        </div>
  </div>
}




