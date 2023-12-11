import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function footer() {
    return (
        <>
            <div className="bg-black">
                <div className="px-32 py-10 flex justify-between">
                    <div className="">
                        <div className="py-2">
                            <Link href="/home">
                                <p className='text-white text-blod text-xl'>Exclusive</p>
                            </Link>
                        </div>
                        <div className="py-2">
                            <p className='text-white text-blod'>Subscribe</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Get 10% off your first order</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            
                                <p className='text-white text-blod text-xl'>Support</p>
                           
                        </div>
                        <div className="py-2">
                            <p className='text-white '>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>0024shahroz@gmail.com</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>+923036810740</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            
                                <p className='text-white text-blod text-xl'>Account</p>
                           
                        </div>
                        <div className="py-2">
                            <p className='text-white '>My Account</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Login / Register</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Cart</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Wishlist</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Shop</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-2">
                            
                                <p className='text-white text-blod text-xl'>Quick Link</p>
                           
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Privacy Policy</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Terms Of Use</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>FAQ</p>
                        </div>
                        <div className="py-2">
                            <p className='text-white '>Contact</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}
