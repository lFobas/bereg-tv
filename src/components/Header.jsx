'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { toast } from 'react-toastify';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)

  const notify = () => toast("Поки не доступно :(");
  return (
    <div className='flex justify-center w-full h-24'>
      <div className='w-9/12 lg:block hidden'>
        <div className='flex justify-between items-center h-full'>
        <div className='flex justify-center items-center text-white w-44 h-12'>
          <Link href={'/'} className='text-2xl'>Bereg-Tv</Link>
        </div>
        <ul className="flex justify-center items-center gap-6 text-white">
                <li><Link href={'/about'}><h3>Про Нас</h3></Link></li>
                <li><Link href={'/taryf'}>Тарифи</Link></li>
                <li><Link href={'/contacts'}>Контакти</Link></li>
                <li><Link href={'/documents'}>Документи(договори)</Link></li>
        </ul>

        <div className='w-44 h-12 '>
          <button onClick={notify} className=' bg-prime-color w-full h-full rounded-full'>Ввійти</button>
        </div>
        </div>
      </div>
      <div className={`flex w-full ${isOpen ? 'justify-between': 'justify-end'} items-center m-3 lg:hidden`}>
        {isOpen ?<Link href={'/'} className='text-white text-3xl'>Bereg-Tv</Link> : null}

        {!isOpen ? <>
          <ul className="menu menu-horizontal rounded-box text-white text-2xl">
              <button className='mx-3' onClick={e=>setIsOpen(!isOpen)}>
                <Link href={'/about'}><FaInfoCircle /></Link>
              </button>
              <button className='mx-3' onClick={e=>setIsOpen(!isOpen)}>
                <Link href={'/taryf'}><MdOutlinePriceChange /></Link>
              </button>
              <button className='mx-3' onClick={e=>setIsOpen(!isOpen)}>
                <Link href={'/contacts'}><MdContactPhone /></Link>
              </button>
              <button className='mx-3' onClick={e=>setIsOpen(!isOpen)}>
                <Link href={'/documents'}><IoDocumentAttach /></Link>
              </button>
            </ul>
        </> : null}
        <button onClick={e=>setIsOpen(!isOpen)} className='text-white'>
          {isOpen ? <RxHamburgerMenu
            size={'24'}
          /> :
          <RiCloseFill 
          size={'24'}
          />}
        </button>
      </div>
    </div>
  )
}

export default Header