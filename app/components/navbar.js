

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className=" lg:px-10 sm:px-2 py-4 ">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/home">

                            <h3 className="text-3xl font-semibold hover:text-gray-300 cursor-pointer duration-200">
                                Meddical
                            </h3>

                        </Link>
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className=" focus:outline-none">
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex justify-between sm:gap-10">
                            <div className="flex space-x-4">
                                <Link href="/home">
                                    <p className='hover:underline underline-offset-4'>Home</p>
                                </Link>
                                <Link href="/contact">
                                    <p className='hover:underline underline-offset-4'>Contact</p>
                                </Link>
                                <Link href="/about">
                                    <p className='hover:underline underline-offset-4'>About</p>
                                </Link>
                                <Link href="/signup">
                                    <p className='hover:underline underline-offset-4'>Sign Up</p>
                                </Link>
                                <Link href="/doctorsSchedule">
                                    <p className='hover:underline underline-offset-4'>Doctors's Schedule</p>
                                </Link>
                                <Link href="/createProfile">
                                    <p className='hover:underline underline-offset-4'>Create Profile</p>
                                </Link>
                                <Link href="/appointmentsTable">
                                    <p className='hover:underline underline-offset-4'>AppointmentsTable</p>
                                </Link>
                            </div>
                            <div className="flex justify-between md:gap-3 ">
                                <div className="">
                                    <Link href="/login"><p className='hover:underline underline-offset-4'>Login</p></Link>
                                </div>
                                <div className="">
                                    <Link href="/cart"><Image src="/assets/Cart.png" width={20} height={20} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
