import React from 'react';
import Banner from '../components/banner/banner';
import Preview from '../components/preview/preview';
import Detail from '../components/detail/detail';
import Instructor from '../components/instructor/instructor';
import './page.css'


import { Col, Container, Row } from 'react-bootstrap';
const Pages = () => {
    return (
        // <Banner />
        <div>
            <div className="no-padding">
                <Banner />
            </div>
            <Container className="p-1 page">

                <Row>
                    <Preview />
                </Row>
                <Row>
                    <Col xl={9}>
                        <Detail />
                    </Col>
                    <Col className="d-none d-xl-block p-0">
                        <Instructor />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pages;
