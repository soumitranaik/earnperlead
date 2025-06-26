import React from 'react'
import HeroHeader from './HeroHeader'
import HeroCollage from './HeroCollage'
import HeroUsedBy from './HeroUsedBy'
import HeroFooter from './HeroFooter'
import HeroPhoneBlock from './HeroPhoneBlock'
import "./style.scss"

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <HeroHeader />
        <div className='hero-media'>
          <HeroCollage />
          <HeroPhoneBlock />
        </div>
        <HeroUsedBy />
        <HeroFooter />
    </div>
  )
}

export default HeroSection