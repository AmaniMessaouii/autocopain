import React from 'react'
import timeIcon from '../../assets/timeIcon.svg'
import positionIcon from '../../assets/positionIcon.svg'
import priceIcon from '../../assets/priceIcon.svg'
import stars from '../../assets/stars.svg'
function CardUser({ item, index, buttonValid }) {
    return (
        <div key={index} className='flex-Column gap-24 card-depanneur'>
            <div className='flex-Column gap-16'>
                <div className='flex-row align-items-center justify-content-between'>
                    <div className='flex-row align-items-center gap-20'>
                        <div className='position-relative'>
                            <img src={item.avatar} alt="avatar" />
                            <img src={item.avatarsub} alt="" className='position-absolute position-avatar' />
                        </div>
                        <div className='flex-Column gap-6'>
                            <span className='paraXlargeB primary-dark-color'>{item.name}</span>
                            <span className='paraMediumSemi grey-color-700'>{item.date}</span>
                        </div>
                    </div>
                    <div className='flex-Column align-items-end gap-6'>
                        <div className='flex-row align-items-center gap-8'>
                            <img src={stars} alt="stars" />
                            <span className='paraMediumM grey-color-700'>{item.stars}</span>
                        </div>
                        {!buttonValid ?
                            <span className='paraMediumSemi grey-color-700'>{item.date}</span>
                            : null}
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className='flex-row align-items-center justify-content-between gap-32'>
                    <div className='flex-row align-items-center gap-8'>
                        <img src={positionIcon} alt='' />
                        <span className='paraLargeSemi grey-color-900'>{item.position}</span>
                    </div>
                    <div className='flex-row align-items-center gap-8'>
                        <img src={timeIcon} alt='' />
                        <span className='paraLargeSemi grey-color-900'>{item.time}</span>
                    </div>
                    <div className='flex-row align-items-center gap-8'>
                        <img src={priceIcon} alt='' />
                        <span className='paraLargeSemi grey-color-900'>{item.price}</span>
                    </div>
                </div>
                {buttonValid ?
                    <div className='flex-row align-items-center gap-12'>
                        <button type="submit" className="button-secondary button-primary w-100">
                            Décliner
                        </button>
                        <button type="submit" className="button-primary w-100" >
                            Payer
                        </button>
                    </div>
                    : 
                    null}
            </div>
        </div>
    )
}

export default CardUser