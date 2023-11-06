import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
    return (
        <>
            <section>
                <Container className='bg-dark text-white' fluid>
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <Stack direction='horizontal' className='gap-4'>
                                    <Stack direction='horizontal' className='gap-2'>
                                        <FiPhoneCall />
                                        <p className='mb-0'>+91 434888999</p>
                                    </Stack>
                                    <Stack direction='horizontal' className='gap-2'>
                                        <HiOutlineMail />
                                        <p className='mb-0'>info@gmail.com</p>
                                    </Stack>
                                </Stack>

                            </Col>
                            <Col lg='6'>
                                <Stack>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            USD
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        </>
    )
}

export default Header