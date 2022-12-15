import React, { useState, useEffect } from 'react';
import LnggA from './sample-1/LnggA'
import Lngg2 from './sample-2/LnggB'

export default function LangInfographic() {

    // const [menuActive, setMenuState] = useState(false);
    // let classes = "collapse";
    // if (menuActive) {
    //     classes += " yellow";
    // }
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };

    // function changeCls() {
    //     setMenuState("expandCls");
    // }
    const Lang = {
        lngg: `<div id="SECTION_LNGG" className="section lang-sec infobarsec" data-ratingscale="6">
            <div className="heading">
                <div className="sectiontitle" id="SECTIONNAME_LNGG">Languages</div>
            </div>
            <div className="paragraph paragraph-fieldgroup" id="PARAGRAPH_LNGG">
                <div className="singlecolumn infobarpara">
                    <div className="fieldgroup-0">
                        <div className="field lang-space fielditem-frfm">
                            <span id="FIELD_FRFM">Negotiated</span>
                            <span className="colon" dependency="FRFM">
                                <span className="beforecolonspace"> </span>:</span>
                            <span className="flt-right" id="FIELD_RATG" />
                        </div>
                        <div className="rating-bar fielditem-ratv" dependency="RATV">
                            <div className="inner-rating" id="FIELD_RATV" type="width" />
                        </div>
                        <div className="field fielditem-ratt lang-scale">
                            <span id="FIELD_RATT" />
                            <span className="colon" dependency="RATT">: </span>
                        </div>
                        <div className="field fielditem-adif">
                            <span id="FIELD_ADIF" />
                        </div>
                    </div>
                </div>
                <div className="singlecolumn infotilepara">
                    <div className="fieldgroup-0">
                        <div className="field lang-space fielditem-frfm">
                            <span id="FIELD_FRFM">Negotiated</span>
                            <span className="colon" dependency="FRFM">
                                <span className="beforecolonspace"> </span>:</span>
                            <span className="flt-right" id="FIELD_RATG" />
                        </div>
                        <div className="sliced-rect fielditem-ratv" dependency="RATV">
                            <div className="sliced-rect-tile" id="FIELD_RATV" type="slicedrect" />
                        </div>
                        <div className="field fielditem-ratt lang-scale">
                            <span id="FIELD_RATT" />
                            <span className="colon" dependency="RATT">: </span>
                        </div>
                        <div className="field fielditem-adif">
                            <span id="FIELD_ADIF" />
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    return (
        <div className='Section' id="languageTile">
            <h2>Language Infographic Samples:</h2>

            {/* Header Samples 1 */}
            <div className='row'>
                <h4 className='title flex justify-between items-center'>
                    <span>
                        <b>Language Infographic Tiles</b> - side-by-side (Wider column)</span>
                    <button  onClick={ToggleClass} className="bg-white text-blue-500 border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active show px-3" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false" data-bs-target="#example1" aria-controls="example1" data-ripple-color="hsl(0, 0%, 67%)"><i className="fas fa-code me-md-2"></i> {"</>"} Show code</button>
                </h4>
                {/* <section className={`${menuActive ? "collapse" : "expand"}`} id="example1"> */}
                <section className={`inline-block w-11/12 m-auto ${isActive ? "deactive" : "active"}`} id="example1">
                    <div className="pt-4">
                        <div className="docs-pills">
                            <div className="d-flex justify-content-between p-0 rounded-t-lg border-t border-l border-r border-gray-200">
                                <ul className="nav nav-pills p-2 flex bg-slate-500">
                                    <li className="nav-item">
                                        <a className="text-black border border-solid border-black-500  hover:text-white bg-white hover:bg-black font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  active show " data-bs-toggle="pill" href="#mdb_6271df0c5d97c50300ff7765ac4c9e495150c579" role="tab">HTML</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-black border border-solid border-black-500  hover:text-white bg-white hover:bg-black font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  active show " data-bs-toggle="pill" href="#mdb_6271df0c5d97c50300ff7765ac4c9e495150c579" role="tab">CSS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="text-black border border-solid border-black-500  hover:text-white bg-white hover:bg-black font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  active show " data-bs-toggle="pill" href="#mdb_6271df0c5d97c50300ff7765ac4c9e495150c579" role="tab">Copy</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content h-72 overflow-y-auto bg-slate-100 text-xs">
                                <div className="tab-pane fade  active show " id="mdb_6271df0c5d97c50300ff7765ac4c9e495150c579" role="tabpanel">
                                    <div className="code-toolbar rounded-t-none">
                                        <div className="toolbar">
                                            <div className="toolbar-item text-right">
                                                
                                            </div>
                                        </div>
                                        <pre className='p-4'>{Lang.lngg}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='wider-col py10 px15'>
                    <LnggA />
                </div>
            </div>
            <div className='row'>
                <h4 className='title'>
                    <b>Infographic Tiles</b> - Narrow column</h4>
                <div className='narrow-col py10 px15'>
                    <Lngg2 />
                </div>
            </div>
        </div >
    )
}
