import React from 'react'



import Image from 'next/image'
export default function ImageCard(props) {
    return (
        <div className="image-card">
            {/* <Image src={} alt="" width={500} height={300} priority /> */}
            <div className="layer ">
                <div className="flex justify-center pt-[10%] ">
                    <h3 className='text-6xl font-bold  items-center text-white mx-30'>{props.heading}</h3>

                </div>
                <div className="flex justify-center ">
                    <h6 className='text-white'>{props.description}
                    </h6>
                </div>
            </div>
        </div>
    )
}
