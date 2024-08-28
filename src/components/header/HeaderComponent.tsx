"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
    {
        id: 1,
        name: "Home"
    },
    {
        id: 2,
        name: "About Us"
    },
    {
        id: 3,
        name: "Services"
    },
    {
        id: 4,
        name: "Projects"
    },
    {
        id: 5,
        name: "News"
    }, {
        id: 6,
        name: "Contact"
    }
]

const HeaderComponent = () => {
    const router = usePathname()
    console.log(router)
    return (
        <header className='backdrop-sm relative  w-full 2xl:w-4/6 mx-auto'>
            <div className='h-[90px] flex items-center justify-between
             mx-auto border-b border-b-white'>
                <Link href={"/"}>
                    <p className='uppercase text-3xl font-bold text-white'>HansiCloudSolutions</p></Link>
                <nav className='h-full flex items-center' id='main-nav'>
                    <ul className='h-full flex gap-0 items-center font-normal text-white'>
                        {
                            navLinks.map(link => {
                                return (
                                    <Link key={link.id} href={`/${link.name}`}>
                                        <li className={`h-full w-[80px] px-2 whitespace-nowrap hover:bg-[#4065d6] text-center py-14 ${router === "/" && link?.name === "Home" ? "bg-white nav-link-clip-path text-black" : ""}`}>{link.name}</li></Link>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderComponent