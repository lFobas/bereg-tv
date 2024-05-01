import Card from '@/components/Card'
import React from 'react'
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const page = () => {
  return (
    <>
    <div className='flex justify-end m-10'>
      <Card 
        title={'Phone'}
        imgUrl={"/img/Contact.png"}
        cardBody={'+380952482009'}
        />
    </div>
    <div className='flex justify-start m-10'>
      <Card 
        title={'Наша Адреса'}
        imgUrl={"/img/map.png"}
        cardBody={'м.Берегове пл.Кошута 5'}
        />
    </div>
    <div className='flex justify-end m-10'>
      <Card 
        title={'Реквізити'}
        imgUrl={"/img/iban.jpg"}
        cardBody={'ЄДРПОУ 32953840\n UA563052990000026000003605074'}
        />
    </div>
    </>
  )
}

export default page
