import React from 'react'

const Contact = () => {
  return (
    <div name='contact' id='contact' className='w-full h-screen bg-[#030507] flex justify-center items-center p-4 contact'>
          <form method='POST' action="https://getform.io/f/e12ef1c5-e90d-422f-852c-16f0be00014f" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-purple-700 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@hotmail.com</p>
              </div>
              <div className='flex flex-col p-8 bg-transparent  border-2 border-solid form-box rounded-2xl'>
                <input className='border-b-2 bg-transparent text-white p-2 inputbox' type="text" placeholder="Name" name="name" />
                <input className='my-4 p-2 border-b-2 bg-transparent text-white' type="email" placeholder="Email" name="email" />
                <textarea className='rounded-lg border-2 bg-transparent p-2 text-white' name="message" rows="10" placeholder='Message'></textarea>
                <button className=' px-4 py-3 my-8 mx-auto flex items-center send-email'>Let's Collaborate</button>
              </div>
          </form>

    </div> 
    
  )
}

export default Contact