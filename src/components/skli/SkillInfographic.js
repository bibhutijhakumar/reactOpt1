import React from 'react'
import SkliA from './sample-1/SkliA'
import SkliB from './sample-2/SkliB'

export default function SkillInfographic() {
    return (
        <div className='section' id="skillTile">
            <h2>Skill Infographic Samples:</h2>

            {/* Header Samples 1 */}
            <div className='row'>
                <h4 className='title'><b>Infographic Tiles</b> - side-by-side (Wider column)</h4>
                <div className='skli-wider-col py10 px15'>
                    <SkliA/>
                </div>
            </div>

            <div className='row'>
            <h4 className='title'><b>Infographic Tiles</b> - Narrow column</h4>
                <div className='narrow-col py10 px15'>
                    <SkliB/>
                </div>
            </div>
        </div>
    )
}
