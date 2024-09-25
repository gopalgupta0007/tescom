import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import internshalaLogo from '../image/internshalaLogo.png'

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ position: 'relative', bottom: 0, borderTop:'2px solid #ccc' }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span className='textWhiteEnter'>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/search/top?q=tescom%20business%20solutions' target='_blank' className='me-4 text-reset'>
                        <MDBIcon id="facebook-icon" fab icon="facebook-f" />
                    </a>
                    <a href='https://www.google.com/search?q=tescom+business+solutions&sca_esv=512b414220c41cc4&rlz=1C1GCEA_enIN1063IN1063&sxsrf=ADLYWIIkcK3cL6ZpKHb-jDtMR0YB7pSlCg%3A1724918077440&ei=PSnQZvK7Gr6YseMP-Zv02Ac&ved=0ahUKEwiyzpbK3JmIAxU-TGwGHfkNHXsQ4dUDCBA&uact=5&oq=tescom+business+solutions&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXRlc2NvbSBidXNpbmVzcyBzb2x1dGlvbnMyBBAjGCcyChAjGIAEGCcYigUyBBAjGCcyExAuGIAEGEMYxwEYyQMYigUYrwEyBRAAGIAEMgsQABiABBiRAhiKBTICECYyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI5ApQAFjmBHAAeACQAQCYAaQBoAGzAqoBAzAuMrgBA8gBAPgBAZgCAqACyALCAgsQLhiABBjHARivAZgDAJIHAzAuMqAH-Bg&sclient=gws-wiz-serp' target='_blank' className='me-4 text-reset'>
                        <MDBIcon fab id="google-icon" icon="google" />
                    </a>
                    <a href='https://www.instagram.com/tescom.in/' target='_blank' className='me-4 text-reset'>
                        <MDBIcon fab id="instagram-icon" icon="instagram" />
                    </a>
                    <a href='https://internshala.com/company/tescom-business-solutions-1714366894/' target='_blank' className='me-4 text-reset'>
                        <img src={internshalaLogo} id="internshala" alt="internshala logo" style={{borderRadius:'2px'}} />
                    </a>
                    <a href='https://www.linkedin.com/company/tescomglobal/?originalSubdomain=in' target='_blank' className='me-4 text-reset'>
                        <MDBIcon fab id="linkedin-icon" icon="linkedin" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='textWhiteEnter text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                TESCOM BUSINESS SOLUTION
                            </h6>
                            <p className='textWhiteEnter'>
                                Tescom is now emerging as a major player in providing Complete business solutions in field of, TELECOMUNICATIONS INFORMATION TECHNOLOGY to major companie & Telcos in and around…
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4' >Useful links</h6>
                            <p>
                                <a href='http://localhost:3001/contactus' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                                    Contact US
                                </a>
                            </p>
                            <p>
                                <a href='http://localhost:3001/career' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                                    Career
                                </a>
                            </p>
                            <p>
                                <a href='#!' style={{ textDecoration: 'none' }} className='text-reset textWhiteEnter'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 '>
                            <h6 className='text-uppercase fw-bold mb-4 textWhiteEnter'>Contact</h6>
                            <p className='textWhiteEnter' style={{ padding: '2px' }}>
                                <MDBIcon icon="home" className="me-2" />
                                <a href="https://maps.app.goo.gl/UJefQZ4c2wNHtrh36" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"> Thane, Mumbai, Maharashtra</a>
                            </p>
                            <p className='textWhiteEnter' style={{ padding: '2px' }}>
                                <MDBIcon icon="envelope" className="me-3 " />
                                <a href="https://mail.google.com/mail/u/0/?fs=1&to=support@tescom.in&su=Subject&body=Enter%20Message&tf=cm" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">support@tescom.in</a>
                            </p>
                            <p className='textWhiteEnter' style={{ padding: '2px' }}>
                                <MDBIcon icon="phone" className="me-3" />
                                <a href="tel:9029019067" className='textWhiteEnter' style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">+91 9029019067</a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 textWhiteEnter' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright&nbsp;:&nbsp;<a className='text-reset fw-bold' href='https://tescom.in/'>tescom.in</a>
            </div>
        </MDBFooter>
    );
}

// "https://api.whatsapp.com/send?phone=918928005505"