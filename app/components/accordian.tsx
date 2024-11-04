'use client'
import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import '@/app/i18n';

// the hook
import { useTranslation } from 'react-i18next';


export default function AccordianComponent() {
    const { t, i18n } = useTranslation();
    // i18n.changeLanguage('en');

    return (
        // <div style={{maxHeight: "100vh"}}>
            <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle="WHEN & HOW DO I APPLY?">
                        <p>You can now register for an <strong>NYU ID number</strong> and apply for Summer Housing. Please follow the  step-by-step instructions on our How-to-Apply  page in order to complete the housing application  correctly, including inputting your Group Name  and Authorization Code. This will ensure that you  correctly fill out the application and affiliate yourself with your group. Once you have completed all  steps, your housing is secured.  </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle="Question #2">
                        <button style={{backgroundColor:"lightblue", borderStyle:"solid", borderWidth:"thick"}} onClick={() => {
                            if(i18n.language == "en") {
                                i18n.changeLanguage('fr')
                            }
                            else {
                                i18n.changeLanguage('en')
                            }
                        }}>Change language
                        </button>

                        <p>{t('Welcome to React')}</p>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle="Question #3">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                        by default, until the collapse plugin adds the appropriate classes
                        that we use to style each element. These classes control the overall
                        appearance, as well as the showing and hiding via CSS transitions. You
                        can modify any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer>
        // </div>

);
}

