import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Get in touch with us!</p>
      <p className='text-gray-400 mt-3'>Subscribe to receive the latest updates, offers, and style tips in your inbox.</p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe!</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
