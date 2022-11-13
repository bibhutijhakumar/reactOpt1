import React from 'react'
import HeaderA from './sample-1/HeaderA'
import HeaderB from './sample-2/HeaderB'
import HeaderC from './sample-3/HeaderC'
import HeaderD from './sample-4/HeaderD'
import HeaderE from './sample-5/HeaderE'

export default function HeaderSample() {
    return (
        <div className='header' id="header">
            <h2>Header Samples:</h2>

            {/* Header Samples 1 */}
            <div className='row'>
                <h4 className='title'>Header Samples 1</h4>
                <HeaderA/>
            </div>

            <div className='row'>
                <h4 className='title'>Header Samples 2</h4>
                <HeaderB />
            </div>

            <div className='row'>
                <h4 className='title'>Header Samples 3</h4>
                <HeaderC />
            </div>

            <div className='row'>
                <h4 className='title'>Header Samples 4</h4>
                <HeaderD />
            </div>
            <div className='row'>
                <h4 className='title'>Header Samples 5</h4>
                <HeaderE />
            </div>
        </div>
    )
}
