import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>We’re more than just a fashion brand. we’re a story of elegance and purpose.</p>
          <p>We craft each collection to bring style, comfort, and individuality to every wardrobe.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To inspire confidence through thoughtfully designed clothing that blends tradition with modern trends.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize premium materials and expert craftsmanship to ensure lasting quality in every product.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience with easy navigation, fast checkout, and reliable delivery.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is always ready to help—before, during, and after your purchase.  </p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
