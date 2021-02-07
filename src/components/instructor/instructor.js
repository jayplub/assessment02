import React from 'react';
import './instructor.scss';
import { Container, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComment, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const instrutorProfile = {
    src: 'instructor-profile.png',
    review: 547,
    point: 4.7,
    course: 1,
    name: 'เมษ์ ศรีพัฒนาสกุล',
    details: [
        { text: 'กรรมการผู้จัดการและผู้ร่วมก่อตั้ง Asian Leadership Academy / LUKKID' },
        { text: 'ที่ปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking) ให้กับบริษัทชั้นนำของประเทศไทย' },
        { text: 'หัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่ Stanford (d.school)' },
        { text: 'จบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of Business' },
        { text: 'จบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of Pennsylvania' },
    ],
}

const academyProfile = {
    src: 'academy-profile.png',
    review: 3028,
    point: 4.7,
    course: 29,
    name: 'มหาวิทยาลัยธรรมศาสตร์',

    details: [
        { text: 'สถาบันวิชาการชั้นนำของเอเชีย ที่ได้มาตรฐานสากลในการผลิตบัณฑิต การสร้างองค์ความรู้ และการแก้ปัญหาต่าง ๆ' },
        { text: 'ยึดมั่นในคุณธรรมและการรับใช้ประชาชน ดังคำขวัญของมหาวิทยาลัยที่กล่าวว่า เป็นเลิศ เป็นธรรม ร่วมนำสังคม' },
    ],
}

function ProfileCard(props) {

    const profileData = props.data;

    return (
        <div className="d-flex bd-highlight instructor-box">
            <div className="p-0 w-50 bd-highlight">
                <Image className="instructor-profile" src={profileData.src} />

            </div>
            <div className="p-0 flex-shrink-1 bd-highlight">
                <div className="instructor-detail">
                    <p className="instructor-name">{profileData.name}</p>
                    <p> <span><FontAwesomeIcon icon={faStar} /> {profileData.point} คะแนนเฉลี่ย</span></p>
                    <p> <span><FontAwesomeIcon icon={faComment} />  {profileData.review} รีวิว</span></p>
                    <p> <span><FontAwesomeIcon icon={faPlayCircle} />  {profileData.course} คอร์ส</span></p>
                </div>
            </div>
        </div>
    )

}


const instructor = () => (
    <Container className="p-3">

        <Row className='p-0'>
            <Col>
                <Tabs defaultActiveKey="instructor" transition={false} id="course-detail-tab">
                    <Tab tabClassName="d-none d-xl-block" eventKey="instructor" title="ผู้สอน">
                        <ProfileCard data={instrutorProfile} />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
        <Row>
            <Col>
                <ul className="instructor-exp">

                    {instrutorProfile.details.map(data => (
                        <li>{data.text}</li>
                    ))}

                </ul>

            </Col>
        </Row>
        <hr />
        <Row className='p-0'>
            <Col>
                <ProfileCard data={academyProfile} />
            </Col>
        </Row>
        <Row>
            <Col>
                <ul className="instructor-exp">

                    {academyProfile.details.map(data => (
                        <li>{data.text}</li>
                    ))}

                </ul>

            </Col>
        </Row>
    </Container>

);


export default instructor;
