import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Row } from 'react-bootstrap';
import './information.css'
import { useState } from 'react';
import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import newsimg from '../../assets/img/computer1.jpg'
import guides from '../../assets/img/illustration2.png'
import Contact from '../contact/contact';
import Usercomment from '../usercomments/usercomments';
import { Link } from 'react-router-dom';

function Information(){
    let [navbarBackground,setnavbarBackground]=useState('')
    let [navbarColor,setNavbarColor]=useState('dark')
    window.addEventListener('scroll',(e)=>{
        if(window.scrollY >100){
            setnavbarBackground('light')
            setNavbarColor('light')
        }
        else {
            setnavbarBackground('none')
            setNavbarColor('dark')
        }
    })
    let expand = 'md'
    return(
    <>
    <div  className="information--lang--choose">
        {/* navbar part */}
        <Navbar key={expand} 
        expand={expand} 
        fixed='top' 
        data-bs-theme={`${navbarColor}`} 
        className={`bg-${navbarBackground} me-3`}>
        <Container >
            <Navbar.Brand href="#"> ریاست عمومی پاسپورت </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            >
            <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    ریاست عمومی پاسپورت 
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#contact">تماس</Nav.Link>
                <Nav.Link href="#news"> اخبار </Nav.Link>
                <Nav.Link href="#a">  جستوجو </Nav.Link>
                <Nav.Link href="#guide">  رهنمود </Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar> 
        {/* dari and pashto button */}
        <div className="ministry-of-passport-name">ریاست عمومی پاسپورت</div>
        <div className="information--lang-btns">
            <Link to='/home' className="text-decoration-none text-white">
                <button>دری</button>
            </Link>
            <Link to='/home' className="text-decoration-none text-white">
                <button>پشتو</button>
            </Link>
        </div>       
    </div>
    {/*  ثبت نام فورم */}
   <div className="information-registration">
        {/* طریقه ثبت نام فورم آنلاین  */}
        <Container className='px-3'>
            <Row className='text-center'>
            <h1 className='py-5'> طریقه ثبت نام فورم آنلاین </h1>   
            <video className='video' controls>
                <source src={video2}  type="video/mp4"></source>
            </video>
            </Row>
        {/* جریان کار در ریاست عمومی پاسپورت  */}
            <Row className='text-center'>
            <h1 className='py-5'> جریان کار در ریاست عمومی پاسپورت </h1>   
            <video className='video' controls>
                <source src={video1}  type="video/mp4"></source>
            </video>
            </Row>
            {/* guides */}
            <Row id='guide'>
            <div className="download-guide-img">
                <button>   دانلود رهنمود </button>
            </div>
            </Row>
            <Row>
                <img src={guides} className='img-fluid' alt="" />
            </Row>
        </Container>
   </div>
   {/*  د پاسپورټ د عمومي ریاست خبرتیا  */}
   <Container className='px-3'>
    <Row className='py-5' id='news'>
        <Col md={5}>
           <h1>   د پاسپورټ د عمومي ریاست خبرتیا </h1>
           <p>
            د پاسپورټ عمومي ریاست د ښو خدماتو د وړاندې کولو او د مراجعینو د کاري پړاوونو د چټکتیا په پار، غواړي د دغې ادارې په تخنیکي او تجهیزاتي سیسټمونو کې ځینې مثبت بدلونونه راولي. دا چې هره ورځ د پاسپورټ په مرکزي اداره کې محترمو غوښتنوالو ته له څلورو تر پنځو زرو پاسپورټونه وېشل کېږي، د وخت په اوښتو سره د چاپ او ځینې نورو تخنیکي وسایلو خپله کاری وړتیا له لاسه ورکړی او اوس د دغو وسایلو ترمیم یا بدلولو ته اړتیا لیدل کېږي. د دغې پروسې بشپړول وخت غواړي او اړتیا ده، چې د پاسپورټونو د وېش خدمات د یادې شوې پروسې تر بشپړېدو پورې وځنډول شي. د پاسپورټ ټولو محترمو متقاضیانو ته خبر ورکول کېږي، چې د تخنیکي ډلو د کار تر بشپړېدو او د یادو شویو وسایلو تر ترمیم پورې، د پاسپورټ د وېش بهیر د تلې میاشتې له ۱۶ وروسته ځنډېږي. له محترو مراجعینو څخه هیله کوو، چې تر دویمې خبرتیا پورې چې د کورنیو چارو وزارت او پاسپورټ عمومي ریاست له وېبپاڼو به خپره شي، د پاسپورټ عمومي ریاست ته دې مراجعه نه کوي.
            </p>
            <h1> اطلاعیه ریاست عمومی پاسپورت </h1>
            <p>ریاست عمومی پاسپورت جهت ارائیه خدمات بهتر و تسریع پروسه های کاری در نظر دارند تا یک سلسله تغیرات را در تجهیزات و سیستم های تخنیکی وارد سازند. هر وسیله و تجهیزات بنا بر استفاده و گذشتن وقت رو به استهلاک میگراید از اینکه در مرکز روزمره حدود چهار الی پنج هزار پاسپورت صادر میگردد وسایل مربوطه آنها نیاز به ترمیم و تبدیل دارند. پروسه ترمیم و تبدیل تجهیزات ضرورت به زمان دارد، لذا الی ختم پروسه توزیع پاسپورت معطل است. توزیع پاسپورت متقاضیان بعد از تاریخ 16 میزان 1401 الی تکمیل و حل شدن مشکلات فنی متوقف است. لذا از همه مراجعین و هموطنان گرامی احترامانه تقاضامندیم که الی اطلاع ثانی وزارت محترم امور داخله و ریاست عمومی پاسپورت از طریق ویب سایت ها و یا رسانه های دیگر منتظر باشند و به ریاست عمومی پاسپورت مراجعه نه نماین</p>
        </Col>
        <Col md={7} className='border-end border-success border-5'>
            <img src={newsimg} className='img-fluid my-5 py-5' alt="" />
        </Col>
    </Row>
    </Container>
     {/* نظریات مراجعین  */}
   <Usercomment />
   {/* contact */}
   <Contact />
    </>
    )
}

export default Information