import React from 'react'
import { Name } from '../../name/Name'
import { Pict } from '../../pict/Pict'
import "./headera.css"

export default function HeaderA() {
    return (
        <div id="CONTAINER_PARENT_0" className="topsection hdr1 pict-purl">
            <div id="CONTAINER_0" className="left-box">
                <Name/>
            </div>
            <div id="CONTAINER_1" className="right-box">
                <Pict/>
            </div>
        </div>
    )
}
