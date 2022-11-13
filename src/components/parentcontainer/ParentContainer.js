import React from 'react'
import { Accomplishment } from '../accm/Accomplishment'
import { AdditionalInfo } from '../addi/AdnlInfo'
import { Affiliation } from '../afil/Affiliations'
import { AdditionalLink } from '../alnk/AdditionalLink'
import { Certifications } from '../cert/Certification'
import { ContactInfo } from '../cntc/ContactInfo'
import { PrsnlInfo } from '../cust/PrsnlInfo'
import { Education } from '../educ/Education'
import { Experience } from '../expr/Experience'
import { SkillFrfm } from '../hilt/SkillFrfm'
import { Interests } from '../intr/Interest'
import { LangInfographic } from '../lngg/LangInfographic'
import { Objective } from '../objc/Objective'
import { Publications } from '../publ/Publication'
import { References } from '../refe/Reference'
import { SkillInfographic } from '../skli/SkillInfographic'
import { Summary } from '../summ/Summary'

export const ParentContainer = () => {
    return (
        <div id="CONTAINER_PARENT_1" className="parent-container">
            <div id="CONTAINER_2" className="left-box">
                <ContactInfo/>
                <SkillFrfm/>
                <Education/>
                <SkillInfographic/>
            </div>
            <div id="CONTAINER_3" className="right-box">
                <AdditionalLink/>
                <Summary/>
                <Objective/>
                <Accomplishment/>
                <Experience/>
                <Certifications/>
                <PrsnlInfo/>
                <References/>
                <Affiliation/>
                <Publications/>
                <Interests/>
                <LangInfographic/>
                <AdditionalInfo/>
            </div>
        </div>
    )
}
