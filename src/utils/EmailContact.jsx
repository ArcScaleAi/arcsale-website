import React, { useEffect, useState } from 'react'
import { RiInstagramLine, RiLinkedinBoxFill } from '@remixicon/react'
import { onValue, ref } from 'firebase/database'
import { database } from './firebaseConfig'

export const EmailContact = () => {
    const [contact, setContact] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/footer'), (snapshot) => {
          if (snapshot !== null) {
            setContact(snapshot.val())
          }
        }, {
          onlyOnce: true
      })
      }, [])

    return (
        <>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-2xl'>Contact us</h2>
                <a className='hover:text-color-primary' href={`tel:${contact?.phone}`}>+{contact?.phone}</a>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-2xl'>Email us</h2>
                <a className='hover:text-color-primary' href={`mailto:${contact?.email}`}>{contact?.email}</a>
            </div>
        </>
    )
}

// Code for Social Media Links
export const FollowUs = () => {
    const [contact, setContact] = useState('')

    useEffect(() => {
        onValue(ref(database, 'data/footer'), (snapshot) => {
          if (snapshot !== null) {
            setContact(snapshot.val())
          }
        }, {
          onlyOnce: true
      })
      }, [])
      
    return <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-2xl'>Follow us</h1>
        <div className='flex gap-3'>
            <a href={`${contact.linkedinLink}`} target='_blank' className='p-3 hover:scale-110 w-14 bg-color-primary rounded-full'><RiLinkedinBoxFill size={32} color='white' /></a>
            <a href={`${contact.instagramLink}`} target='_blank' className='p-3 hover:scale-110 w-14 bg-color-primary rounded-full'><RiInstagramLine size={32} color='white' /></a>
        </div>
    </div>
}

