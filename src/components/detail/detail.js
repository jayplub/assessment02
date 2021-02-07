import React from 'react';
import './detail.scss';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Instructor from '../instructor/instructor';
import Curriculum from '../curriculum/curriculum';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                {this.state.isToggleOn ? <Paragraph/> : <ParagraphShort/>}

                <button className="toggle-btn" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ซ่อน' : 'อ่านทั้งหมด'}
                </button>
            </div>

        );
    }
}

const ParagraphShort = () => {
    return (
        <div className="description-box">
            <p>
                <strong className="bold-txt">นวัตกรรม (Innovation) เป็นสิ่งที่ทุกคนกำลังมองหา </strong> เพราะไม่ว่าคุณจะเป็นพนักงานบริษัท ผู้บริหาร เจ้าของกิจการ หรือไม่ว่าจะทำสายอาชีพอะไรก็ตาม เราต่างอยากทำให้งานของเราออกมาดีขึ้น อยากทำงานให้น้อยแต่ได้ผลมาก และอยากสร้างผลงานที่สร้างผลกระทบที่ดีในวงกว้าง<br /><br />

    ด้วยเหตุนี้เอง Design Thinking หรือ กระบวนการคิดเชิงออกแบบ จึงกลายเป็นเรื่องที่รับความนิยมอย่างแพร่หลายทั่วโลก เพราะ Design Thinking คือกระบวนการที่มุ่งเน้นมนุษย์เป็นศูนย์กลาง เพื่อให้ได้มาซึ่งนวัตกรรมใหม่ และเป็นเครื่องมือที่จะช่วยให้คุณแก้ไขปัญหายากๆ อีกด้วย หากคุณเป็นคนที่ต้องคอยคิดสร้างผลิตภัณฑ์ใหม่ๆ ตลอดเวลา หรือต้องพบเจอกับปัญหาที่แก้ไขยากๆ Design Thinking จะช่วยเหลือคุยได้แน่นอน<br /><br />

    ในคอร์สนี้คุณจะได้เรียนรู้ขั้นตอนทั้งหมดของ Design Thinking อย่างละเอียด รวมถึงตัวอย่างการประยุกต์ใช้ Design Thinking ของบริษัทระดับโลกที่นำวิธีนี้ไปใช้ในการ...
</p>
        </div>
    )
};

const Paragraph = () => {
    return (
        <div className="description-box">
            <p>
                <strong className="bold-txt">นวัตกรรม (Innovation) เป็นสิ่งที่ทุกคนกำลังมองหา </strong> เพราะไม่ว่าคุณจะเป็นพนักงานบริษัท ผู้บริหาร เจ้าของกิจการ หรือไม่ว่าจะทำสายอาชีพอะไรก็ตาม เราต่างอยากทำให้งานของเราออกมาดีขึ้น อยากทำงานให้น้อยแต่ได้ผลมาก และอยากสร้างผลงานที่สร้างผลกระทบที่ดีในวงกว้าง<br /><br />

    ด้วยเหตุนี้เอง Design Thinking หรือ กระบวนการคิดเชิงออกแบบ จึงกลายเป็นเรื่องที่รับความนิยมอย่างแพร่หลายทั่วโลก เพราะ Design Thinking คือกระบวนการที่มุ่งเน้นมนุษย์เป็นศูนย์กลาง เพื่อให้ได้มาซึ่งนวัตกรรมใหม่ และเป็นเครื่องมือที่จะช่วยให้คุณแก้ไขปัญหายากๆ อีกด้วย หากคุณเป็นคนที่ต้องคอยคิดสร้างผลิตภัณฑ์ใหม่ๆ ตลอดเวลา หรือต้องพบเจอกับปัญหาที่แก้ไขยากๆ Design Thinking จะช่วยเหลือคุยได้แน่นอน<br /><br />

    ในคอร์สนี้คุณจะได้เรียนรู้ขั้นตอนทั้งหมดของ Design Thinking อย่างละเอียด รวมถึงตัวอย่างการประยุกต์ใช้ Design Thinking ของบริษัทระดับโลกที่นำวิธีนี้ไปใช้ในการสร้างนวัตกรรมใหม่และแก้ไขปัญหาต่างๆ และสำคัญที่สุด คอร์สนี้จะสอนวิธีการนำ Design Thinking ไปใช้ในชีวิตจริงและชีวิตการงานของทุกคน<br /><br />

                <i>Design Thinking เป็นสิ่งที่สำคัญในยุคนี้มาก และเป็นเรื่องที่ทุกคนที่อยากประสบความสำเร็จต้องรู้</i><br /><br />

                <strong className="bold-txt">สิ่งที่คุณจะได้เรียนรู้</strong><br />
    - กระบวนการและขั้นตอนของ Design Thinking ทั้งหมด อย่างละเอียด<br />
    - วิธีการนำ Design Thinking ไปประยุกต์ใช้การงาน และการดำรงชีวิตประจำวัน<br />
    - ตัวอย่างการใช้ Design Thinking ขององค์กรชั้นนำ<br />
    - ความต่างของ Design Thinking เมื่อเทียบกับ Thinking อื่นๆ<br /><br />

                <strong className="bold-txt">ผู้เรียนต้องมีความรู้อะไรมาก่อนหรือไม่</strong><br />
    - คอร์สนี้เหมาะสำหรับทุกคน ไม่จำเป็นต้องมีความรู้ด้านใดมาก่อนก็เรียนได้<br /><br />

                <strong className="bold-txt">ประเภทของคอร์ส</strong>
    (C) คอร์สนี้เป็นคอร์สบังคับ (Core Course)  ของหลักสูตรปริญญาโทบริหารธุรกิจ สาขา Business Innovation ของมหาวิทยาลัยธรรมศาสตร์และ SkillLane<br /><br />

                <strong className="bold-txt">การคำนวณเกรด</strong><br />
    คอร์สนี้ประกอบด้วย 1. แบบทดสอบ (Quiz) คิดเป็น 25% ของเกรด และ 2. ข้อสอบไฟนอล (Final Exam) คิดเป็น 75% ของเกรด โดยการตัดเกรดเป็นดังนี้<br /><br />

    A 90-100<br />
    A- 85-89.99<br />
    B+ 80-84.99<br />
    B 75-79.99<br />
    B- 70-74.99<br />
    C+ 65-69.99<br />
    C 60-64.99<br />
    D 50-59.99<br />
    F 0-49.99<br /><br />

                <strong className="bold-txt">ประวัติวิทยากร</strong><br />
    เมษ์ ศรีพัฒนาสกุล<br />
    ปัจจุบัน เมษ์ ศรีพัฒนาสกุล ดำรงตำแหน่งกรรมการผู้จัดการและผู้ร่วมก่อตั้ง LUKKID บริษัทที่ให้คำปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking) ให้กับบริษัทชั้นนำของประเทศไทย เมษ์เป็นผู้เชี่ยวชาญด้าน Design Thinking โดยเฉพาะ เขาเคยเป็นหัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่ มหาวิทยาลัย Stanford เขาจบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of Business และจบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of Pennsylvania
</p>
        </div>
    )
};

const Detail = () => (
    <Container className="p-3">
        <Row>

            <Col>
                <Tabs defaultActiveKey="description" transition={false} id="course-detail-tab">
                    <Tab eventKey="description" title="รายละเอียด">

                        {/* <Paragraph /> */}
                        <Toggle />

                        <Curriculum />
                    </Tab>
                    <Tab tabClassName="d-xl-none" eventKey="instructor" title="ผู้สอน">
                        <Instructor />
                    </Tab>
                    <Tab tabClassName="d-none d-xl-block" eventKey="payment" title="วิธีการชำระเงิน">
                        Payment
                        </Tab>
                    <Tab tabClassName="d-none d-xl-block" eventKey="chat" title="ห้องสนทนา">
                        Chat
                        </Tab>
                    <Tab eventKey="review" title="รีวิว">
                        Review
                        </Tab>
                </Tabs>
            </Col>


        </Row>
    </Container >

);


export default Detail;
