import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
       <div className='z-50 transition-all glass p-1 space-x-2 flex justify-center items-center fixed right-0 top-10'>
     <a className='hover:scale-75 transition-all hover:rotate-12' href="tel:9983760244">
      <Image src={"/icons/call.png"} width={50} height={50} />
     </a>
     <a className='hover:scale-75 transition-all hover:rotate-12' href="mailto:mtsschool1998@gmail.com">
      <Image src={"/icons/mail.png"} width={50} height={50} />
     </a>
    </div>
    <div className='z-50 transition-all glass md:p-5 p-1 h-12 space-x-2 flex justify-center items-center fixed bottom-4 md:h-20 left-1/2 -translate-x-1/2'>
      <Link href={'/'}>
      <div className='transition-all icon-parent'>
        <p className='glass-blur text-center text-black -mb-6 text-xl p-3'>Home</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image className='icons'  src="/icons/home.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <Link href={'/about'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>About</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image className='icons'  src="/icons/about.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <Link href={'/addmission'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>Addmission</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image className='icons'  src="/icons/addmission.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <Link href={'/payment'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>Pay Fee</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image className='icons'  src="/icons/payment.png" width={30} height={30} />
      </div>
      </div>
      </Link>
      <Link href={'/gallery'}>
        <div className='transition-all icon-parent'>
        <p className=' glass-blur text-center text-black -mb-6 text-xl p-3'>Gallery</p>
      <div className=" glass-blur md:p-3 p-1 flex justify-center items-center cursor-pointer">
        <Image className='icons'  src="/icons/gallery.png" width={30} height={30} />
      </div>
      </div>
      </Link>
    </div>
    </>
  )
}

export default Navbar
