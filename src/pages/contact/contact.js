import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

// react icons
import { FaTelegramPlane } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaRegAddressCard } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
// 
export default function Contact(){
    return(
        <div className="cantact-container">
        <Container>
            <Row id='contact'>
                <div className="contact-container">
                <h1>
                    <FaTelegramPlane />
                </h1>
                <h1>تماس با ما</h1>
                </div>
            </Row>
            <Row className='row-cols-md-4 text-center py-5'>
                <div className="contact-items ">
                    <h1> <TfiEmail /> </h1>
                    <div> email</div>
                </div>
                <div className="contact-items ">
                    <h1> <MdAddCall /> </h1>
                    <div> call</div>
                </div>
                <div className="contact-items ">
                    <h1> <FaRegAddressCard /> </h1>
                    <div> address </div>
                </div>
            </Row>
            <Row className='text-center text-white'>
                <div>
                    <h1> <FaFacebook /> </h1>
                </div>
                <div>Copyright © IT Department (General Passport Directorate) 2022</div>
            </Row>
        </Container>
       </div>
    )
}