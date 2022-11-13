import React from 'react'
import LnggA from './sample-1/LnggA'
import Lngg2 from './sample-2/LnggB'

export default function LangInfographic() {
    return (
        <div className='Section' id="languageTile">
            <h2>Language Infographic Samples:</h2>

            {/* Header Samples 1 */}
            <div className='row'>
                <h4 className='title'><b>Infographic Tiles</b> - side-by-side (Wider column)</h4>
                <div className='wider-col py10 px15'>
                    <LnggA/>
                </div>
            </div>

            <div className='row'>
            <h4 className='title'><b>Infographic Tiles</b> - Narrow column</h4>
                <div className='narrow-col py10 px15'>
                    <Lngg2/>
                </div>
            </div>
        </div>
    )
}
