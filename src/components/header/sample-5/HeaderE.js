import React from 'react'
import { Name } from '../../name/Name'
import { Pict } from '../../pict/Pict'
import './headere.css'

export default function HeaderE() {
    return (
        <div id="CONTAINER_PARENT_0" className="hdr5 pict-purl">
            <div id="CONTAINER_0" className='topsection '>
                <Pict />
                <Name />
            </div>
        </div>
    )
}
