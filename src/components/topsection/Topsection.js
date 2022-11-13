import React from 'react'
import { Name } from '../name/Name'
import { Pict } from '../pict/Pict'

export const Topsection = () => {
    return (
        <div id="CONTAINER_PARENT_0" className="topsection">
            <div id="CONTAINER_0" className="left-box">
                <Name/>
            </div>
            <div id="CONTAINER_1" className="right-box">
                <Pict/>
            </div>
        </div>
    )
}
