import React, { useState } from 'react'
import { Alert, ContactInput } from '.'
import { database } from './firebaseConfig'
import { ref, set } from 'firebase/database'
import { useForm } from 'react-hook-form'

const ContactForm = ({ openModal, contactHead }) => {
  const [message, setMessage] = useState('')
  const inputClass = `h-[40px] p-3 focus:outline-none rounded-md w-full ${openModal ? 'border border-gray-300' : ''}`
  const { register, trigger, handleSubmit, formState: { errors } } = useForm()


  async function writeUserData(data, e) {
    try{
      const isValid = await trigger()
      if (!isValid) {
        e.preventDefault()
      }
  
      set(ref(database, `data/users/${openModal ? `${contactHead}` : 'demo'}/${data.name}`), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message
      });

      Alert('Form Submitted')
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className={`md:w-1/3 w-[92%] pb-8 pt-8 md:p-8 p-3 mt-6 rounded-3xl border border-color-primary shadow-2xl ${openModal ? 'absolute left-1/2 middle bg-white' : 'mx-auto bg-[rgba(134,72,239,0.11)]'}`}>
      <form
        onSubmit={handleSubmit(writeUserData)}
        className='w-full flex flex-col items-center gap-4'>
        {openModal && (
          <h1 className='text-center text-2xl text-color-primary font-medium'>{contactHead}</h1>
        )}
        <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
          <label className='text-color-primary ' htmlFor="name">Name</label>
          <input {...register('name', {
            required: true
          })} className={inputClass} type='text' id="name" />
        {errors.name &&
          <p className='mt-1 text-color-primary'>
            {errors.name.type === 'required' && "This field is required"}
          </p>
        }
        </div>

        <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
          <label className='text-color-primary ' htmlFor="phone">Phone</label>
          <input {...register('phone', {
            required: true,
            pattern: /^\d{10}$/
          })} className={inputClass} type='number' id='phone' />
          {errors.phone &&
                <p className='mt-1 text-color-primary'>
                  {errors.phone.type === 'required' && "This field is required"}
                  {errors.phone.type === 'pattern' && "Invalid phone type"}
                </p>
              }
        </div>

        <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
          <label className='text-color-primary ' htmlFor='email'>Email</label>
          <input {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })} className={inputClass} type='text' id='email' />
          {errors.email &&
                <p className='mt-1 text-color-primary'>
                  {errors.email.type === 'required' && "This field is required"}
                  {errors.email.type === 'pattern' && "Invalid email type"}
                </p>
              }
        </div>

        <div className='flex flex-col gap-1 px-7 w-full'>
          <label className='text-color-primary ' htmlFor="message">Message</label>
          <textarea onChange={(e) => setMessage(e.target.value)} rows={4} cols={8} className={`rounded-md p-3 mb-3 focus:outline-none ${openModal ? 'border border-gray-300' : ''}`} name="" id="message"></textarea>
          {message === '' &&
                <p className='mt-1 text-color-primary'>This field is required</p>
              }
        </div>
        <button type='submit' className='px-6 hover:bg-[#762cf4] py-3 text-white tracking-wide text-lg w-fit font-medium rounded-full bg-color-primary'>Submit Form</button>
      </form>
    </div>
  )
}

export default ContactForm
