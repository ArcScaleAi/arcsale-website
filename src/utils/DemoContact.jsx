import React, { useState } from 'react'
import { Alert } from '.'
import { database } from './firebaseConfig'
import { ref, set } from 'firebase/database'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useProductContext } from '../contexts/productContext'

const DemoContact = ({ openModal }) => {
  const [message, setMessage] = useState('')
  const inputClass = `h-[40px] p-3 focus:outline-none rounded-md w-full all-input-second`
  const { register, trigger, handleSubmit, formState: { errors } } = useForm()


  async function submit(data, e) {
    try {
      // setOpenModal(false)
      const isValid = await trigger()
      if (!isValid) {
        e.preventDefault()
      }

      const messageInput = document.querySelector('.message-input-second')
      console.log(messageInput.value);
      messageInput.value = ''
      document.querySelectorAll('.all-input-second').forEach(input => {
        input.value = ''
      })

      set(ref(database, `data/users/demo/${data.name}`), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message
      }).then(() => {
        Alert('Form Submitted')
      })

    } catch (err) {
      console.log(err);
    }
    
    const formData = {
      subject: data.subject,
      access_key: data.access_key,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message
    }
    const formJson = JSON.stringify(formData)
    console.log(formJson);
    
    await axios.post('https://api.web3forms.com/submit', formJson, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

  }


  return (
    <div className={`md:w-1/3 w-[92%] pb-8 pt-8 md:p-8 p-3 mt-6 rounded-3xl border border-color-primary shadow-2xl ${openModal ? 'absolute left-1/2 middle bg-white' : 'mx-auto bg-[rgba(134,72,239,0.11)]'}`}>
      <form
        onSubmit={handleSubmit(submit)}
        className='w-full flex flex-col items-center gap-4'>
          <input type="hidden" {...register('subject')} name="subject" value={`Inquiry from Get a Demo`} />
        <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
          <input type="hidden" {...register('access_key')} name="access_key" value={import.meta.env.VITE_EMAIL_API} />
          <label className='text-color-primary ' htmlFor="name">Name</label>
          <input {...register('name', {
            required: true
          })} className={inputClass} type='text' id="name" name='name' />
          {errors.name &&
            <p className='mt-1 text-red-600'>
              {errors.name.type === 'required' && "This field is required"}
            </p>
          }
        </div>

        <div className='flex flex-col gap-1 md:px-7 px-6 w-full'>
          <label className='text-color-primary ' htmlFor="phone">Phone</label>
          <input {...register('phone', {
            required: true,
            pattern: /^\d{10}$/
          })} className={inputClass} type='number' id='phone' name='phone' />
          {errors.phone &&
            <p className='mt-1 text-red-600'>
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
          })} className={inputClass} type='text' id='email' name='email' />
          {errors.email &&
            <p className='mt-1 text-red-600'>
              {errors.email.type === 'required' && "This field is required"}
              {errors.email.type === 'pattern' && "Invalid email type"}
            </p>
          }
        </div>

        <div className='flex flex-col gap-1 px-7 w-full'>
          <label className='text-color-primary ' htmlFor="message">Message</label>
          <textarea onChange={(e) => setMessage(e.target.value)} rows={4} cols={8} className={`rounded-md p-3 mb-3 focus:outline-none message-input-second`} name="message" id="message"></textarea>
          {message === '' &&
            <p className='mt-1 text-red-600'>This field is required</p>
          }
        </div>
        <button type='submit' className='px-6 hover:bg-[#762cf4] py-3 text-white tracking-wide text-lg w-fit font-medium rounded-full bg-color-primary'>Submit Form</button>
      </form>
    </div>
  )
}

export default DemoContact
