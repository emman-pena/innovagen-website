'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/sendEmail';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className='bg-white rounded-md shadow-md px-10 lg:px-20 py-9 gap-20'>
        <div className='py-10'>
        <h2 className='text-xl font-bold'>Have questions or want to learn more about our services? Reach out to us!</h2>
         Fill in the form below, and our team will get back to you promptly.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
            <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
            {...register('name', { required: true })}
            />
        </div>
        <div className='mb-5'>
            <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
            {...register('email', { required: true })}
            />
        </div>
        <div className='mb-5'>
            <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
            {...register('message', { required: false })}
            ></textarea>
        </div>
        <div>
            <button className='hover:shadow-form rounded-md bg-teal-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-teal-300'>
            Submit
            </button>
        </div>
        </form>
    </div>
  );
};

export default Contact;