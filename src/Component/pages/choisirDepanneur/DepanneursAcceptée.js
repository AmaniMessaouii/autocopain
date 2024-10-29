
import React from 'react'
import arrow from "../../../assets/Arrow - Left.svg"
import { depanneurData } from "../../constants"
import CardUser from '../../common/CardUser'
function DepanneursAcceptée() {

    return (
        <div className='Container'>
            <div>
                <div className='flex-row align-items-center arrow-top gap-16' style={{ marginBottom: "30px" }}>
                    <img src={arrow} alt="arrow" />
                    <h4 className='grey-color-900 title-nowrap'>Nos dépanneurs disponibles</h4>
                </div>
                <div className='flex-Column gap-24'>
                    {depanneurData.map((item, index) => (
                        <CardUser item={item} index={index} buttonValid={false} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default DepanneursAcceptée