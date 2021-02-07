import React from 'react';
import './banner.scss';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

const rating = {
    score: 4.7,
    reviewCount: 547
}


const Banner = () => (
    <div className="p-2 bg-banner">
    <Container className="p-2" className="inner-banner">
        <Row>
            <Col>
                <div className="d-inline p-2">
                    <Image className="brand-icon" src='/icon-tuxsa.png' />
                </div>
                <div className="d-inline p-2">
                    <span className="brand-txt" >หลักสูตรปริญญาโทออนไลน์</span>
                </div>
            </Col>

        </Row>
        <Row>
            <Col>
                <div className="p-2">
                    <span className="brand-sub-txt">Design Thinking กระบวนการคิดเชิงออกแบบ </span>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button className="btn-category" variant="outline-success" size="sm">ปริญญาโทบริหารธุรกิจ สาขา Business Innovation</Button>{' '}
            </Col>
        </Row>
        <Row>
            <div class="d-flex">
                <div className="p-2 stars" >
                    <ReactStars
                        count={5}
                        value={rating.score}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        edit={false}
                    />
                </div>
                <div className="p-2">
                    <span className="review-txt">{rating.score} ({rating.reviewCount} รีวิว)</span>

                </div>
                <div className="p-2">
                    <Button className="btn-share" variant="success" size="sm">
                        <span><FontAwesomeIcon icon={faShareAlt} /> แชร์คอร์สนี้</span></Button>{' '}

                </div>
            </div>
        </Row>
    </Container>
    </div>

);


export default Banner;
