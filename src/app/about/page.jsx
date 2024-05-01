import HeroAbout from '@/components/HeroAbout'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"

const page = () => {
  return (
    <div className='p-3'>
      <SpeedInsights/>
      <HeroAbout />
    </div>
  )
}

export default page
