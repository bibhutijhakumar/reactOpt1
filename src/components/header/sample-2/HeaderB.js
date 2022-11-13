import React from 'react'
import { Name } from '../../name/Name'
import { Pict } from '../../pict/Pict'
import './headerb.css'

export default function HeaderB() {
    return (
        <div id="CONTAINER_PARENT_0" className="hdr2 pict-purl">
            <div id="CONTAINER_0" className='topsection '>
                <Pict />
                <Name />
            </div>
        </div>
    )
}
