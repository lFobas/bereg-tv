import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar bg-gray-700">
            <div className="navbar">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
                    <li><Link href={'/about'}>Про Нас</Link></li>
                    <li><Link href={'/taryf'}>Тарифи</Link></li>
                    <li><Link href={'/taryf'}>Тарифи</Link></li>
                    <li><Link href={'/contacts'}>Контакти</Link></li>
                    <li><Link href={'/documents'}>Документи(договори)</Link></li>
                    {/* <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-xl text-slate-200">Bereg Tv</Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                <li><Link href={'/about'}>Про Нас</Link></li>
                <li><Link href={'/taryf'}>Тарифи</Link></li>
                <li><Link href={'/contacts'}>Контакти</Link></li>
                <li><Link href={'/documents'}>Документи(договори)</Link></li>
                {/* <li>
                    <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    </nav>
  )
}

export default Navbar
