import React from 'react'
import {Card} from "react-bootstrap"

const Footer = () => {
    return (
        <div>
            <Card>
                <Card.Body><h5>Fais ton choix</h5></Card.Body>
            <div className="d-flex justify-center">
                <Card.Link href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13560899667&extra_1=s|c|528366731461|e|instagram|&placement=&creative=528366731461&keyword=instagram&partner_id=googlesem&extra_2=campaignid%3D13560899667%26adgroupid%3D130591015624%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-29167132177%26loc_physical_ms%3D9056144%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIm_j0iKn_8gIVErTVCh0-7gdnEAAYASAAEgIVe_D_BwE">Instagram</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </div>   
            </Card> 
        </div>
    )
}

export default Footer
