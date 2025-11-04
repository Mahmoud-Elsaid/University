

import React, { useContext } from 'react'
import { BannerContext } from '../../Context/BannerContext'
import { Link } from 'react-router-dom'

export default function Banner() {
    const {Banner } = useContext(BannerContext)
    
return (
  <div>
    <div className=' Banner mt-3 px-5'>
      <div className=' banner-layer p-5 d-flex justify-content-between align-items-center px-5'>
            <div className=' text-white Banner-links '>
                <h4> {Banner}</h4>
            </div>
      </div>
      
    </div>
  </div>
)
}
