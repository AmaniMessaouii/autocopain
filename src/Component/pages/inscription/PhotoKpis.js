import React from 'react'
import extraitImage from '../../../assets/image 1.png'
import photo from '../../../assets/photo0.svg'
import image from '../../../assets/Image0.svg'
import folder from '../../../assets/Folder0.svg'
import arrow from '../../../assets/arrow-white.svg'

function PhotoKpis() {
  return (
    <div className="Container kbis-container">
      <img src={arrow} alt="profile" className='arrow-top' />
      <div class='flex-Column align-items-center gap-30'>
        <h3 className="white-color text-center">Photo</h3>
          <img src={extraitImage} alt="Extrait KBIS" className="kbis-image" />
          <div className="flex-row gap-20 align-items-center">
            <div className="small-button">
              <img src={image} alt='' />
            </div>
            <div className="large-button">
              <img src={photo} alt='' />
            </div>
            <div className="small-button">
              <img src={folder} alt='' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default PhotoKpis