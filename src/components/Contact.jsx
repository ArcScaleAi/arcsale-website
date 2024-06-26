import React from 'react'
import {HighlightedTitle } from '../utils'
import DemoContact from '../utils/DemoContact'

const Contact = () => {
    return (
        <section className='md:py-10 pb-10 w-full items-center'>
            <h1 className='w-full text-center text-4xl font-bold py-6'>Start Building Your <HighlightedTitle text={"AI-Powered"} /> Future</h1>
            <DemoContact />
        </section>
    )
}

export default Contact