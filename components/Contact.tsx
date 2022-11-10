/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}; 

const Contact = ({}: Inputs) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => (
    window.location.href = `mailto:nshutileeroy@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} and my email is ${formData.email}. ${formData.message}`
  );

  return (
    <div className="h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 scale-75">
        <h4 className="text-4xl font-semibold text-center pt-7 px-8">
          I'm the guy you need, {" "}
          <span className="decoration-[#47B5FF]/50 underline">Let's talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#47B5FF] h-6 w-6 animate-pulse" />
            <p className="text-2xl">+250 785 774 575</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#47B5FF] h-6 w-6 animate-pulse" />
            <p className="text-2xl">nshutileeroy@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#47B5FF] h-6 w-6 animate-pulse" />
            <p className="text-2xl">Kigali, Rwanda</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input  {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input  {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

          <textarea  {...register('message')} placeholder="Message" className="contactInput"/>
          <button
          type='submit'
          className="bg-[#47B5FF] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact