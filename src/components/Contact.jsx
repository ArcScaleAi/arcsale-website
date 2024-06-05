import React from 'react'
import {HighlightedTitle } from '../utils'
import ContactForm from '../utils/ContactForm'

const Contact = () => {
    return (
        <section className='py-10 w-full items-center'>
            <h1 className='w-full text-center text-4xl font-bold py-6'>Start Building Your <HighlightedTitle text={"AI-Powered"} /> Future</h1>
            <ContactForm />
        </section>
    )
}

export default Contact