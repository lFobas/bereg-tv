import Image from 'next/image'
import React from 'react'
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Card = ({ imgUrl, cardBody, title }) => {


  return (
    <div className="card card-side bg-prime-color shadow-xl">
        <div>
        <Image
            src={imgUrl}
            width={600}
            height={200}
            alt="Contact"
            className='rounded-t-2xl'
            />
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{cardBody}</p>
        </div>
        </div>
    </div>
  )
}

export default Card