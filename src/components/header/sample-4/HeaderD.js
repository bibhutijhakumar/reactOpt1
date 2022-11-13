import React from 'react'
import { ContactInfo } from '../../cntc/ContactInfo'
import { Name } from '../../name/Name'
import { Pict } from '../../pict/Pict'
import './headerd.css'

export default function HeaderD() {
    return (
        <div id="CONTAINER_PARENT_0" className="hdr4">
            <div id="CONTAINER_0" className='topsection'>
                <Pict />
                <Name />
                <ContactInfo/>
            </div>
        </div>
    )
}
