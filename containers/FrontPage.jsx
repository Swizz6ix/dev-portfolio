import React, {useEffect, useState} from 'react';
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';

function FrontPage(args) {
    // const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	});
    
    // const toggle = () => setModalShow(!modalShow);
  return (
    <main>
        <div id='home' className='position-relative'>
            <section className=' section section-lg section-shaped pb-250 bg-image' 
            >
                <div className='shape shape-style-1 bg-gradient-info'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className='py-lg-md d-flex align-items-center vh-100'>
                    <div className='col px-0'>
                        <Row>
                            <Col lg="6">
                                <h3 className='display-3 text-white mb-0'>
                                    ferdinand Charles
                                </h3>
                                <h5 className='mt-0  text-white'>
                                    Software Developer
                                </h5>
                                <div className='pt-5 pb-1'>
                                    <SocialLinks />
                                </div>
                                <div className='btn-wrapper my-4'>
                                    <Button onClick={args.toggle} className=' btn-icon mb-3 mb-sm-0 ml-1' color='warning'>
                                        <span className='btn-inner--icon mr-1'>
                                            <i className='fa fa-phone'/>
                                        </span>
                                        <span className='btn-inner--text'>
                                            Call me
                                        </span>
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Modal
                                    isOpen={args.modalShow}
                                    onHide = {()=>setModalShow(false)}
                                    size='md'
                                    aria-labelledby='contained-modal-tilte-vcenter'
                                    centered
                                    {...args}
                                >
                                    <ModalHeader toggle={args.toggle}>
                                            <h4><span><i className='fa fa-comments' aria-hidden="true"></i></span> Contact Me</h4>
                                    </ModalHeader>
                                    <ModalBody>
                                            <p><span><i className='fa fa-envelope' aria-hidden="true"></i></span> <a href='mailto:ferdinandcharles@gmail.com'>ferdinandcharles6@gmail.com</a></p>
                                            <p><span><i className='fa fa-whatsapp' aria-hidden="true"></i></span> <a href='https://wa.link/4kmiv8'>+2348065711098</a></p>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button type='button' className='btn btn-outline-info default' onClick={args.toggle}> Close</Button>
                                    </ModalFooter>
                                </Modal>
                    </div>
                </Container>
                <div className='separator separator-bottom separator-skew'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
                    >
                        <polygon 
                            className="fill-white"
							points="2560 0 2560 100 0 100 "
                        />
                    </svg>
                </div>
            </section>
        </div>
    </main>
  )
}

export default FrontPage
