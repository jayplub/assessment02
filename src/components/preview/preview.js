import React from 'react';
import './preview.scss';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const thumbnail = {
    src: 'thumbnail.png'
}

const detailList = {
    noCreditPrice: '1,500',
    creditPrice: '4,500',
    nocredit: [
        { text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ', active: true },
        { text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที', active: true },
        { text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ', active: false },
        { text: 'ข้อสอบทั้งหมด 1 ข้อสอบ', active: false },
        { text: 'เก็บหน่วยกิตเรียนปริญญาโท', active: false },
        { text: 'ประกาศนียบัตร', active: false },
    ],
    credit: [
        { text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ', active: true },
        { text: 'เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที', active: true },
        { text: 'แบบทดสอบทั้งหมด 4 แบบทดสอบ', active: true },
        { text: 'ข้อสอบทั้งหมด 1 ข้อสอบ', active: true },
        { text: 'เก็บหน่วยกิตเรียนปริญญาโท', active: true },
        { text: 'ประกาศนียบัตร', active: true },
    ],

};


function DisplayList(props) {

    const isActive = props.isActive;
    const displayText = props.displayText;

    if (isActive) {
        return <span><FontAwesomeIcon icon={faCheck} className="enable-check" />{displayText}</span>
    }
    else {
        return <span><FontAwesomeIcon icon={faTimes} className="disable-check" />{displayText}</span>
    }

}

const Preview = () => (
    <div className="banner-detail">
        <Container className="p-2">
            <Row>
                <Col xl={6} xs={12}>
                    <Image src={thumbnail.src} fluid />
                </Col>


                <Col xl={3} xs={12}>
                    <Card style={{ width: '100%' }} className="card-box no-credit" >
                        <Card.Body className="detail-card">
                            <Row>
                                <Col>
                                    <Card.Title className="price-txt">{detailList.noCreditPrice} บาท</Card.Title>
                                </Col>
                            </Row>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Button className="btn-payment-no-credit" variant="outline-success" size="lg" block>ชำระเงินเรียนไม่เก็บหน่วยกิต</Button>{' '}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ul class="price-detail-no-credit">
                                            {detailList.nocredit.map(data => (
                                                <li>
                                                    <DisplayList isActive={data.active} displayText={data.text} />
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} xs={12}>
                    <Card style={{ width: '100%' }} className="card-box credit">
                        <Card.Body className="detail-card borderline-box">
                            <Row>
                                <Col>
                                    <Card.Title className="price-txt">{detailList.creditPrice} บาท</Card.Title>
                                </Col>
                            </Row>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Button className="btn-payment-credit" variant="success" size="lg" block>ชำระเงินเรียนเก็บหน่วยกิต</Button>{' '}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ul class="price-detail-credit">
                                            {detailList.credit.map(data => (
                                                <li>
                                                    <DisplayList isActive={data.active} displayText={data.text} />
                                                </li>
                                            ))}
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    </div>

);


export default Preview;
