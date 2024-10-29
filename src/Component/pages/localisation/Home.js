import React from 'react'
import localisation from '../../../assets/localisation.svg'
import { localisationData } from '../../constants'
import localbtn from '../../../assets/Button.svg'
import stations from '../../../assets/stations.svg'
import garages from '../../../assets/garages.svg'
import map from '../../../assets/Maps-Component.svg'
import MobileMenu from '../../common/MobileMenu'
import garagePosition from '../../../assets/garage-position.svg'
import stationPosition from '../../../assets/station-position.svg'
import avatarPosition from '../../../assets/Avatar-position.svg'

function Home() {
    return (
        <div>
            <div className='position-relative'>
                <img src={localisation} alt='' className='localisation-img' />
                <div className='flex-Column gap-8 groupe-btn-local position-absolute'>
                    <button className="btn-map-groupe bg-blue paraMediumR w-100 flex-row justify-content-center white-color align-items-center gap-16" >
                        Tous</button>
                    <div className='flex-row gap-8'>
                        <button className="btn-map-groupe paraMediumR bg-white-color primary-dark-color w-100 flex-row justify-content-center align-items-center gap-12" >
                            <img src={stations} alt='' /> Stations </button>
                        <button className="btn-map-groupe paraMediumR bg-white-color primary-dark-color w-100 flex-row justify-content-center align-items-center gap-12" >
                            <img src={garages} alt='' /> Garages </button>
                    </div>
                </div>
                <img src={garagePosition} alt='' className='position-absolute garage-position' />
                <img src={garagePosition} alt='' className='position-absolute garage-position0' />
                <img src={stationPosition} alt='' className='position-absolute station-position' />
                <div className='position-absolute avatar-map'>
                    <div className='avatar-map-2'>
                            <img src={avatarPosition} alt='' className='avatar-position' />
                    </div>
                </div>
            </div>
            <div className="popup-overlay-bottom-local position-relative">
                <img src={map} alt='' className='map-local-img position-absolute' />

                <div className="popup-bottom-local flex-Column gap-24 align-items-center">
                    <div className='devider-image' style={{ marginBottom: '24px' }}></div>
                    <div className='flex-Column w-100 gap-24'>
                        {localisationData.map((item, index) => (
                            <div className='flex-Column gap-24'>
                                <div key={index} className='flex-row align-items-center justify-content-between gap-12'>
                                    <div className='flex-row align-items-center gap-20'>
                                        <img src={item.image} alt='' />
                                        <div className='flex-Column '>
                                            <span className='paraSmallB primary-dark-color'>{item.title}</span>
                                            <span className='paraSmallR primary-dark-color'>{item.local}</span>
                                        </div>
                                    </div>
                                    <img src={localbtn} alt='' />

                                </div>
                                <div className="horizontal-divider"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MobileMenu bgcolor='effectWhite' circle='circleWhite' autoProfile={true} bottomStyle='navbar-bottom' />
        </div>
    )
}

export default Home