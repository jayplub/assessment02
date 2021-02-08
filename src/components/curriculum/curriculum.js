import React from 'react';
import './curriculum.scss';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faCheckSquare, faFile } from '@fortawesome/free-solid-svg-icons'

const course = [
    { text: "บทนำ", type: "title" },
    { text: "แนะนำคอร์สออนไลน์", type: "class", preview: true, duration: '01:01' },
    { text: "ความสำคัญของ Design Thinking", type: "title" },
    { text: "01. อะไรคือ Design Thinking?", type: "class", preview: true, duration: '22:40' },
    { text: "02. ความแตกต่างของ Design Thinking กับกระบวนการคิดรูปแบบอื่น", type: "class", preview: true, duration: '11:31' },
    { text: "03. ความเป็นมาของ Design Thinking", type: "class", preview: false, duration: '07:31' },
    { text: "แบบทดสอบที่ 1", type: "title" },
    { text: "แบบทดสอบที่ 1", type: "quiz", point: 5 },
    { text: "ข้อสอบ", type: "title" },
    { text: "ข้อสอบ", type: "exam", point: 60 },
]

function CourseList(props) {
    // const courseType = props.type
    const courseData = props.data

    if (courseData.type === 'title')
        return (

            <Row className="justify-content-md-center box-title">
                <Col>
                    {courseData.text}
                </Col>
            </Row>
        )
    else if (courseData.type === 'class') {
        return (

            <Row className="box-chapter">
                <Col xl={8} xs={4}>
                    <span className="course-name">{courseData.text}</span>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-detail">
                        <div class="d-flex justify-content-end">
                            {courseData.preview &&
                                <div class="p-0 badge-example">
                                    <Badge variant="success">ดูตัวอย่างฟรี</Badge>
                                </div>
                            }

                            <div class="p-0">
                                <FontAwesomeIcon icon={faPlayCircle} className="player-icon" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-duration">
                        <span>{courseData.duration}</span>
                    </div>

                </Col>
            </Row>
        )
    }

    else if (courseData.type === 'quiz') {
        return (

            <Row className="box-chapter">
                <Col xl={8} xs={4}>
                    <span className="course-name">{courseData.text} ({courseData.point} คะแนน) </span>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-detail">
                        <div className="d-flex justify-content-end">
                            <div className="p-0">
                                <FontAwesomeIcon icon={faCheckSquare} className="player-icon" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-duration">
                        <span>แบบทดสอบ</span>
                    </div>
                </Col>
            </Row>
        )

    }

    else if (courseData.type === 'exam') {
        return (

            <Row className="box-chapter">
                <Col xl={8} xs={4}>
                    <span className="course-name">{courseData.text} ({courseData.point} คะแนน) </span>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-detail">
                        <div className="d-flex justify-content-end">
                            <div className="p-0">
                                <FontAwesomeIcon icon={faFile} className="player-icon" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={2} xs={4}>
                    <div className="course-duration">
                        <span>ข้อสอบ</span>
                    </div>
                </Col>
            </Row>
        )

    }

}

const curriculum = () => (
    <Container className="box">

        {course.map(item => (
            <CourseList data={item} />
        ))}

    </Container>
);


export default curriculum;
