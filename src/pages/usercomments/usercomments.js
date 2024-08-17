import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import user1comment from '../../assets/img/gallery-1.jpg'
import user2comment from '../../assets/img/gallery-3.jpg'

export default function Usercomment(){
    return(
        <Container className=' bg-black text-white text-center'>
        <Row >
            <Col md={6} className='my-5'>
                <h1> نظریات مراجعین </h1>
                <p>مهدي حسین؛ د انلاین فورمو په ډکولو سره د پاسپورټ په اخېستنې بریالی شوم</p>
            </Col>
            <Col md={6}>
                <img src={user1comment} className="img-fluid" alt="" />
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <img src={user2comment} className="img-fluid" alt="" />
            </Col>
            <Col md={6} className='my-5'>
                <h1>نظریات مراجعین</h1>
                <p> خوښ یو چې چارې مو پر وخت پرته له ځنډه تر سره شوي</p>
            </Col>
        </Row>
       </Container>
    )
}