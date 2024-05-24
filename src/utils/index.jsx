export const DemoButton = () => {
    return <button className='px-6 py-3 text-white text-lg font-medium rounded-full bg-color-primary'>Get A Demo</button>

}

export const HighlightedWord = ({ text }) => {
    return <span className='text-black font-semibold'>{text}</span>
}

export const HighlightedTitle = ({ text }) => {
    return <span className='text-color-primary'>{text}</span>
}

export const ContactInput = ({text}) => {
    return <div className='flex flex-col gap-1 px-7 w-full'>
        <label className='text-color-primary ' htmlFor={text}>{text}</label>
        <input className='h-[40px] p-3 focus:outline-none rounded-md w-full' type='text' id={text} />
    </div>
}


