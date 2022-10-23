import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen bg-primary'>
        <h1 className='text-2xl font-bold text-center p-4 text-grey'>Booking Inquiries</h1>
        <form className='max-w-[600px] m-auto border-t-2 pt-5'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='input input-accent w-full max-w-xs' type='text' placeholder='Name'/>
                <input className='input input-accent w-full max-w-xs' type='text' placeholder='Email'/>
            </div>
            <input className='input input-accent w-full my-2' type='text' placeholder='Subject'/>
            <textarea className='p-3 w-full textarea textarea-accent' cols='30' rows='10' placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2 btn glass'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;