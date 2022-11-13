import React from 'react'
import { Name } from '../../name/Name'
import { Pict } from '../../pict/Pict'
import './headerc.css'

export default function HeaderC() {
    return (
        <div id="CONTAINER_PARENT_0" className="hdr3 pict-purl">
            <div id="CONTAINER_0" className='topsection '>
                <Pict />
                <Name />
            </div>
        </div>
    )
}
